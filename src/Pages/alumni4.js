import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Violette Renaud', '2001'],
  ['Gustavo Pradilla', '2001'],
  ['Veronica Chiang', '2001'],
  ['Paolo Rizzo', '2001'],
  ['Boris Christov', '2001'],
  ['Yaakov Margulies', '2001'],
  ['James Frazier', '2001'],
  ['Paul Wang', '2001'],
  ['Stephanie Terezakis', '2001'],
  ['Mary Fran Storm', '2002'],
  ['Federico Legnani', '2002'],
  ['Ryan Kretzer', '2002'],
  ['Alia Hdeib', '2002'],
  ['Daniel Case', '2002'],
  ['John Ziewacz', '2002'],
  ['Jonathan Winter', '2002'],
  ['Namath Hussain', '2002'],
  ['Samantha Ford', '2002'],
  ['Kyle Weaver', '2002'],
  ['Justin Caplan','2003'],
  ['Joram Slager', '2003'],
  ['Alex Khalessi', '2003'],
  ['Grettel Zamora', '2003'],
  ['Adam Carinci', '2003'],
  ['Priscilla Brastianos','2003'],
  ['Raqeeb Haque', '2003'],
  ['Rory Goodwin','2003'],
  ['Shaan Raza', '2003'],
  ['Urvashi Uphadhyay', '2003'],
  ['Wesley Hsu', '2003'],
  ['Pablo Recinos','2003'],
  ['Adam Fisch', '2003'],
  ['Yuval Zohar','2003'],
  ['Sarah Brem', '2003'],
  ['Sarah Posner','2003'],
  ['Brandon Togioka', '2004'],
  ['James Lee','2004'],
  ['Gaurav  Mavinkurve', '2004'],
  ['Marilyn Perez', '2004'],
  ['Min-Hee Cho', '2004'],
  ['Christopher Long','2004'],
  ['Neha Gosalia', '2004'],
  ['Alessandro Fiorindi','2004'],
  ['Celina Martinez', '2004'],
  ['Jonathan Pindrik','2004'],
  ['Kent Werner', '2004'],
  ['Stacey Wang', '2004'],
  ['Tiffany Williams', '2004'],
  ['Christina LaDana','2004'],
  ['Margaret Baker', '2004'],
  ['Sandya Nair','2004'],
  ['Priscilla Pang', '2004'],
  ['Markus Bookland','2004'],
  ['William Pennant', '2004'],
  ['Aamir Abbas', '2005'],
  ['Jaishri Blakely (M.D.)','2005'],
  ['Johnny Sobotie', '2005'],
  ['Jay Steven Reidler', '2005'],
  ['Judith Vick', '2005'],
  ['Rounak Nande','2005'],
  ['Carlo Passeri', '2005'],
  ['Andrey Volkov','2005'],
  ['Frank Attenello', '2005'],
  ['Kenneth Tseng','2005'],
  ['Timothy Jansen', '2005'],
  ['Rafael Tamargo (Jr.)', '2005'],
  ['Jessica Pearlman', '2005'],
  ['Tristan Stani', '2005'],
  ['Thomas Pashalides', '2005'],
  ['Jorge Alvernia','2005'],
  ['Edgar Lee', '2005'],
  ['Julie Allen','2005'],
  ['Lindsay Sukay', '2005'],
  ['James Han','2006'],
  ['Zehava Moskowitz', '2006'],
  ['Abhishek Kumar', '2006'],
  ['John Hermann', '2006'],
  ['Gary Kao', '2006'],
  ['Sarah Gearhart', '2006'],
  ['Neena Marupudi', '2006'],
  ['Kaisorn Chaichana', '2006'],
  ['Hasan Zaidi','2006'],
  ['Sahael Stapleton', '2006'],
  ['Sameer Kaiser','2006'],
  ['Thomas Kosztowksi', '2006'],
  ['Sophia Shakur','2006'],
  ['Sam Schulman', '2006'],
  ['Shahbaz Ali Malik', '2006'],
  ['James Han', '2006'],

];

const Alumni4 = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header></header>
          <main className="flex-grow">
          <h1 className='text-3xl font-bold my-4 animate-fadeIn text-center'>2001 - 2006 Alumni</h1>
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


export default Alumni4;
