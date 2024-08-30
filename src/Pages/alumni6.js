import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Catalino Dureza', '1989'],
  ['Peter Oishi', '1989'],
  ['Taras Masnyk', '1989'],
  ['David Lowry', '1989'],
  ['Kevin Judy', '1989'],
  ['Ali Mesiwala', '1990'],
  ['Kee Kim', '1990'],
  ['Young-Chun Park', '1990'],
  ['Mike Froehler', '1990'],
  ['Jon Weingart', '1991'],
  ['Kwame G. Buahin', '1991'],
  ['Mitchell Cahan', '1991'],
  ['Jonathan Baskin', '1991'],
  ['Peter Gerszten', '1991'],
  ['John Davis', '1991'],
  ['Betty Tyler', '1991'],
  ['Omar Jimenez', '1992'],
  ['Oneida Arosarena', '1992'],
  ['Kevin Walter', '1992'],
  ['Bala Giri','1992'],
  ['William Johnson  (Blake)', '1992'],
  ['Robert Zev Raden', '1992'],
  ['Eric Sipos', '1993'],
  ['Tadanobu Utsuki','1993'],
  ['Reid Thompson', '1993'],
  ['Benjamin T. White','1993'],
  ['Timothy Witham', '1993'],
  ['Graham Gardner', '1993'],
  ['Philip Hodge', '1993'],
  ['Mary Wu','1994'],
  ['Phillip B. Storm (Jay)', '1994'],
  ['Khosrow Tabassi','1994'],
  ['Michael Gibbons (Chris)', '1994'],
  ['Matthew Ewend','1994'],
  ['Allen Sills', '1994'],
  ['Merhrdad (Mark) Mofid','1994'],
  ['Matthew Pearson', '1994'],
  ['Ilana Lavana', '1994'],

];

const Alumni6 = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header></header>
          <main className="flex-grow">
          <h1 className='text-3xl font-bold my-4 animate-fadeIn text-center'>1989 - 1994 Alumni</h1>
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


export default Alumni6;
