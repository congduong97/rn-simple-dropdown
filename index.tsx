import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    Pressable,
    LayoutChangeEvent,
    LayoutRectangle,
    ViewStyle,
    StyleProp,
    ScrollView,
    Image,
    TextStyle,
  } from 'react-native';
  import React, {forwardRef, useImperativeHandle, useState} from 'react';
  
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  
  export interface DropdownItemProps {
    key: string | number;
    label: string | number;
  }
  
  export interface DropdownProps {
    data: Array<DropdownItemProps>;
    initValue: DropdownItemProps;
    placeholder?: string;
    onChange: (item: DropdownItemProps) => void;
    style?: StyleProp<ViewStyle> | undefined;
    listContainerStyle?: StyleProp<ViewStyle> | undefined;
    activeColor?: string;
    renderViewItem?: (
      item: DropdownItemProps,
      activeItem: DropdownItemProps | null,
    ) => JSX.Element;
    icon: JSX.Element | null;
    overlayColor: string;
    maxHeightList: number | undefined;
    scrollStyle: StyleProp<ViewStyle> | undefined;
    textStyle: StyleProp<TextStyle> | undefined;
    placeholderStyle: StyleProp<TextStyle> | undefined;
  }
  
  export interface DropdownRefProps {
    close: () => void;
    open: () => void;
    getValue: () => DropdownItemProps;
    setValue: (item: DropdownItemProps) => {};
  }
  
  const Dropdown = forwardRef((props: DropdownProps, ref) => {
    const {
      data,
      placeholder,
      onChange,
      style,
      listContainerStyle,
      activeColor,
      renderViewItem,
      icon,
      overlayColor,
      maxHeightList,
      scrollStyle,
      textStyle,
      placeholderStyle,
      initValue,
    } = props;
    const [isShow, setShow] = useState(false);
    const [val, setVal] = useState<DropdownItemProps | undefined>(initValue);
    const [layout, setLayout] = useState<LayoutRectangle>({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });
  
    useImperativeHandle(
      ref,
      () => ({
        close: onClose,
        open: onOpen,
        getValue: () => {
          return val;
        },
        setValue: (v: DropdownItemProps) => {
          setVal(v);
        },
      }),
      [val],
    );
  
    const onChangeValue = (item: DropdownItemProps) => () => {
      onChange(item);
      setVal(item);
      setShow(false);
    };
    const onClose = () => {
      setShow(false);
    };
    const onOpen = () => {
      setShow(true);
    };
  
    const onToggle = () => {
      setShow(!isShow);
    };
  
    return (
      <TouchableOpacity
        onLayout={(e: LayoutChangeEvent) => {
          setLayout(e.nativeEvent.layout);
        }}
        activeOpacity={1}
        onPress={onToggle}
        style={[styles.container, style]}>
        <View style={styles.rowItem}>
          {val ? (
            <Text style={[styles.value, textStyle]}>{val?.label}</Text>
          ) : (
            <Text style={[styles.placeholder, placeholderStyle]}>
              {placeholder}
            </Text>
          )}
          {icon !== undefined ? (
            icon
          ) : (
            <Image
              source={isShow ? require('./assets/up.png') : require('./assets/down.png')}
            />
          )}
        </View>
        {isShow && (
          <>
            <TouchableWithoutFeedback onPress={onClose}>
              <View
                style={[
                  styles.overlay,
                  {left: -2 * layout.x, top: -2 * layout.y},
                  {backgroundColor: overlayColor},
                ]}
              />
            </TouchableWithoutFeedback>
            <View
              style={[
                styles.listItem,
                {top: layout?.height - 1, borderTopWidth: 0},
                {maxHeight: maxHeightList},
                listContainerStyle,
              ]}>
              <ScrollView contentContainerStyle={[{flexGrow: 1}, scrollStyle]}>
                {data?.map((item, index) => {
                  if (renderViewItem) {
                    return (
                      <Pressable key={item.key} onPress={onChangeValue(item)}>
                        {renderViewItem(item, val)}
                      </Pressable>
                    );
                  }
                  return (
                    <Pressable
                      key={item.key}
                      onPress={onChangeValue(item)}
                      style={[
                        styles.actionItem,
                        index !== data.length - 1 && {
                          borderBottomWidth: 1,
                          borderColor: '#f0eded',
                        },
                        val?.key === item.key && {backgroundColor: activeColor},
                      ]}>
                      <Text style={styles.itemText}>{item.label}</Text>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          </>
        )}
      </TouchableOpacity>
    );
  });
  
  Dropdown.defaultProps = {
    onChange: () => {},
    activeColor: '#f5f5f5',
    overlayColor: 'transparent',
  };
  
  const styles = StyleSheet.create({
    container: {
      width: 250,
      height: 50,
      borderWidth: 1,
      zIndex: 11,
      justifyContent: 'center',
      paddingHorizontal: 20,
      borderRadius: 4,
    },
    overlay: {
      width: WIDTH * 10000,
      height: HEIGHT * 10000,
      position: 'absolute',
      zIndex: 10,
    },
    actionItem: {
      alignItems: 'center',
      paddingVertical: 16,
    },
    listItem: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      left: -1,
      right: -1,
      zIndex: 11,
      borderWidth: 1,
      borderRadius: 4,
      overflow: 'hidden',
    },
    itemText: {
      fontSize: 16,
    },
    value: {
      fontSize: 16,
    },
    rowItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    placeholder: {
      fontSize: 16,
      color: '#aaaaaa',
    },
  });
  
  export default Dropdown;
  