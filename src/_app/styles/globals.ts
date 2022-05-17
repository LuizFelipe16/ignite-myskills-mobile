import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const Theme = StyleSheet.create({
  mtXm: { ...theme.marginTop.xm },
  mtSm: { ...theme.marginTop.sm },
  mtMd: { ...theme.marginTop.md },
  mtLg: { ...theme.marginTop.lg },
  mtXl: { ...theme.marginTop.xl },

  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },

  fontThin: { fontWeight: '200' },
  fontBold: { fontWeight: 'bold' },
  fontBolder: { fontWeight: '900' },
});
