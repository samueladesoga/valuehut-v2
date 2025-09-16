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
    table: {
        marginTop: 20,
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        borderBottomStyle: 'solid',
        alignItems: 'center',
        height: 24,
    },
    tableColHeader: {
        width: '30%',
        fontWeight: 'bold',
    },
    tableCol: {
        width: '30%',
    },
    tableCell: {
        fontSize: 10,
    },
    tableColRateHours: {
        width: '15%', // Adjust as necessary for your layout
        fontSize: 12,
    },
    tableColAmount: {
        width: '30%', // Adjust as necessary for your layout
        fontSize: 12,
        textAlign: 'right',
    },
    // Style for the rows containing the subtotal, discount, and total
    totalsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 24,
    },
    // Style for the total label column
    totalsLabel: {
        width: '70%',
        textAlign: 'right',
        fontSize: 12,
        paddingRight: 10, // Adjust padding as necessary
    },
    // Style for the total amount column
    totalsAmount: {
        width: '30%',
        fontSize: 12,
        textAlign: 'right',
    },
})
