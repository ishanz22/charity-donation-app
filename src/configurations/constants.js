import { RFValue } from "react-native-responsive-fontsize";
import {Dimensions,Platform} from 'react-native';

const {width,height} = Dimensions.get('window');

export const colors = {
  brightGreen : '#51BC82',
  midGreen : '#52BC82',
  lightGreen : '#9AD887',
  lightGray : '#D3D3D3',
  darkGray: '#808080',
  slightGray: '#F5F5F5',
  midGray: '#B6B6B6',
  blue : '#0E05B2',
  darkBlue : '#094279',
  skyBlue : '#14C8ED',
  yellow : '#FFED00',
  orange : '#FFB300',
  lavendar: '#BF94E4',
  red : '#F94200',
  white: '#FFFFFF',
  black: '#000000',
  brown: '#80604D'
}

export const fontSizes = {
  fontXSmall: RFValue(8),
  fontSmall: RFValue(10),
  fontSmallPlus: RFValue(11.5),
  fontMedium: RFValue(12.5),
  fontMidMedium: RFValue(14),
  fontMediumPlus: RFValue(15.5),
  fontLarge: RFValue(16),
  fontXLarge: RFValue(18),
  fontXXLarge: RFValue(20),
  fontXXXLarge: RFValue(24),
  fontXXXXLarge: RFValue(27),
  fontBigger: RFValue(30),
  fontExtraBigger: RFValue(35),
  fontDoubleExcel: RFValue(45)
}

export const fontFamilies = {
  nunitoBold: 'Nunito-Bold',
  nunitoBoldItalic: 'Nunito-BoldItalic',
  nunitoRegular: 'Nunito-Regular',
  nunitoRegularItalic: 'Nunito-Italic',
  nunitoLight: 'Nunito-Light',
  nunitoLightItalic: 'Nunito-LightItalic'
}

export const basicStyles = {
  mainWrapper : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  miniFlexWrapper: {
    flex: 1
  },
  mediumFlexWrapper: {
    flex: 2
  },
  commonWrapper : {
    justifyContent:'center',
    alignItems: 'center'
  }
}

export const dimensions = {
  fullWidth: width,
  fullHeight: height,
  widthLevel1: width*95/100,
  widthLevel2: width*90/100,
  widthLevel3: width*85/100,
  widthLevel4: width*80/100,
  widthLevel5: width*75/100,
  widthLevel6: width*70/100,
  widthLevel7: width*65/100,
  widthLevel8: width*60/100,
  widthLevel9: width*55/100,
  widthLevel10: width*50/100,
  heightLevel1: height*2/100,
  heightLevel2: height*3/100,
  heightLevel3: height*5/100,
  heightLevel4: height*7/100,
  heightLevel5: height*8/100,
  heightLevel6: height*10/100,
  heightLevel7: height*12/100,
  heightLevel8: height*15/100,
  heightLevel9: height*17/100,
  heightLevel10: height*20/100,
  paddingLevel1: width*2/100,
  paddingLevel2: width*3/100,
  paddingLevel3: width*5/100,
  paddingLevel4: width*7/100,
  paddingLevel5: width*8/100,
  paddingLevel6: width*10/100,
  paddingLevel7: width*12/100,
  paddingLevel8: width*15/100,
  paddingLevel9: width*17/100,
  paddingLevel10: width*20/100
}

export const imageSizes = {
  smallIcons: {
    width: height*2.5/100,
    height: height*2.5/100,
  },
  smallPlusIcon: {
    width: height*3.2/100,
    height: height*3.2/100,
  },
  mediumImage: {
    width: height*30/100,
    height: height*10/100,
  },
  largeImage: {
    width: height*60/100,
    height: height*40/100,
  },
  contentImage: {
    width: height*40/100,
    height: height*30/100,
  },
  contentImageIOS: {
    width: height*35/100,
    height: height*25/100,
  },
  packImage: {
    width: height*30/100,
    height: height*20/100,
  }
}

export const getShadows = {
  elevation: 10,
  zIndex: 10,
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 2, },
  shadowOpacity: 0.25,
}
