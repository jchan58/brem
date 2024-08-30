import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Richard Clatterbuck','1995'],
  ['Mark Watts', '1995'],
  ['Darin Epstein', '1995'],
  ['Hamid Yazdi', '1995'],
  ['John Crongeyer', '1995'],
  ['Paul Cohen', '1995'],
  ['Richard Anderson', '1995'],
  ['Karlijn Van Wessem', '1995'],
  ['Kelly Babel', '1996'],
  ['Xue Ming', '1996'],
  ['Justin Hanes', '1996'],
  ['Eric Oshiro, MD', '1996'],
  ['Amer Samdani', '1996'],
  ['Jennifer Pai', '1996'],
  ['Kwang-Wook Suh', '1996'],
  ['Martin Burke', '1996'],
  ['Prakash Sampath', '1996'],
  ['David Sandberg', '1996'],
  ['Quoc-Anh Thai', '1996'],
  ['Johnny Sandhu','1996'],
  ['Neal Naff (MD)', '1997'],
  ['Francesco DiMeco', '1997'],
  ['Anjali Aggarwal', '1997'],
  ['Laurence Rhines','1997'],
  ['Victor Perry', '1997'],
  ['Adam Geyer','1997'],
  ['Kathleen Bruno', '1997'],
  ['Kenji Muro', '1997'],
  ['Michael Gayles', '1997'],
  ['Vance Vanier','1997'],
  ['Eric Amundson', '1997'],
  ['Sander Beekmans','1997'],
  ['David Antezana', '1998'],
  ['Raymond Haroun','1998'],
  ['Sarvenaz Zand', '1998'],
  ['Christopher Lawson','1998'],
  ['Matthew Wetzel', '1998'],
  ['Simone Betchen', '1998'],
  ['Andrew Chang', '1998'],
  ['Chidi Mgwaba', '1999'],
  ['Khan Li', '1999'],
  ['Chetan Bettegowda', '1999'],
  ['Berhane Worku', '1999'],
  ['Jeannette Liu', '1999'],
  ['Luca Denaro', '2000'],
  ['John Reavey-Cantwell', '2000'],
  ['Piyush Banker', '2000'],
  ['Patrik Gabikian', '2000'],
  ['Brendan Lucey', '2000'],
  ['Travis Tierney', '2000'],
  ['Vivian Tsai', '2000'],
  ['Jacqueline Garonzik', '2000'],
  ['Maciej (Matt) Lesniak', '2000']

];

const Alumni5 = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header></header>
          <main className="flex-grow">
          <h1 className='text-3xl font-bold my-4 animate-fadeIn text-center'>1995 - 2000 Alumni</h1>
                <ScrollView style={styles.container}>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                    {tableHeaders.map((header, index) => (
                        <Text key={index} style={[styles.cell, styles.headerCell]}>{header}</Text>
                    ))}
                    </View>
                    {tableData.map((rowData, index) => (
                    <View key={index} style={styles.tableRow}>
                        {rowData.map((cellData, cellIndex) => (
                        <Text key={cellIndex} style={styles.cell}>{cellData}</Text>
                        ))}
                    </View>
                    ))}
                </View>
                </ScrollView>
                <div className="text-center">
                    Please <a href="mailto:btyler@jhmi.edu" className="underline text-blue-900"> email </a> Betty Tyler with any corrections
                </div>
          </main>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderColor: '#ddd',
    textAlign: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#f7f7f7',
  },
});


export default Alumni5;
