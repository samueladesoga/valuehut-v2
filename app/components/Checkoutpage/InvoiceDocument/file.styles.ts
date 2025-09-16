import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
    page: {
        paddingTop: 40,
        paddingBottom: 100,
        paddingHorizontal: 40,
    },
    headerImage: {
        width: 50,
        height: 50,
    },
    rowFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    columnFlex: {
        flexDirection: 'column',
        gap: '4px',
    },
    title: {
        fontSize: 13,
        color: '#4B465C',
    },
    lightDescription: {
        fontSize: '12px',
        color: '#4B465C',
    },
    boldDescription: {
        fontSize: '8px',
        color: '#4B465C',
    },
    pageFooter: {
        position: 'absolute',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '7px',
        bottom: 10,
        left: 0,
        width: '100%',
        transform: 'translateX(50%)',
    },
})

export const tableStyles = StyleSheet.create({
  table: { marginTop: 20, width: '100%' },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    borderBottomStyle: 'solid',
    alignItems: 'center',
    minHeight: 24,                // allow wrap if text is long
  },

  header: {
    fontWeight: 'bold',
  },

  // Equal-width columns: each takes 1 share (20% of row)
  col: {
    flexGrow: 1,
    flexBasis: 0,
  },

  cell: {
    fontSize: 10,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },

  right: { textAlign: 'right' },

  // Totals rows: first 4 cols act as the label, last 1 col as amount
  totalsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 24,
  },
  totalsLabel: {
    flexGrow: 4,   // spans 4 of 5 equal columns (80%)
    flexBasis: 0,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 12,
  },
  totalsAmount: {
    flexGrow: 1,   // spans the last column (20%)
    flexBasis: 0,
    textAlign: 'right',
    fontSize: 12,
  },
})