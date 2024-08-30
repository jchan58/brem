import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Henry Brem', '1984'],
  ['Ken Blumenfeld', '1985'],
  ['Chris Guerin', '1985'],
  ['Rafael Tamargo', '1985'],
  ['Andy Levy', '1986'],
  ['Damirez Fossett', '1986'],
  ['Doug MacKenzie', '1986'],
  ['Michael Yang', '1986'],
  ['John Myseros', '1986'],
  ['Robert Bok', '1987'],
  ['Alessandro Olivi', '1988'],
  ['Doris Lenartz', '1988'],
  ['Takahiro (Taka) Tsuchida', '1988'],
  ['Michael Lawton', '1988'],
];

const Alumni7 = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header></header>
          <main className="flex-grow">
          <h1 className='text-3xl font-bold my-4 animate-fadeIn text-center'>1984 - 1988 Alumni</h1>
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


export default Alumni7;
