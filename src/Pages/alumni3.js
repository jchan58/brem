import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Saint Victor Okonma', '2007'],
  ['Michael Froehler', '2007'],
  ['Ulrich Thomale', '2007'],
  ['Natasha Raman', '2007'],
  ['Benjamin Dorfman', '2007'],
  ['Kristen Schwab', '2007'],
  ['Joe Noggle', '2007'],
  ['Ananth Vellimana', '2007'],
  ['Satish Misra', '2007'],
  ['Shira Zeigler', '2007'],
  ['Eric Momin', '2007'],
  ['Luca Basaldella', '2008'],
  ['Abhishek Rege', '2008'],
  ['Starane Shepherd', '2008'],
  ['Joshua Kenny', '2008'],
  ['Rory Petteys', '2008'],
  ['Harry Brastianos', '2008'],
  ['Kevin (DingXun) Shao', '2008'],
  ['Scott Parker', '2008'],
  ['Lisa Halsbgut','2008'],
  ['Vivek Mehta', '2008'],
  ['Rebecca Abay', '2008'],
  ['Ali Kooshkabadi', '2008'],
  ['Rachel Grossman','2008'],
  ['Sina Tok', '2008'],
  ['Katie Snyder','2008'],
  ['Lauren Huey', '2008'],
  ['Kimon Bekelis', '2008'],
  ['Stefan Ruekriegel', '2008'],
  ['Samuel Hertig','2009'],
  ['Alan Seifert', '2009'],
  ['Junko Yoshida','2009'],
  ['Elizabeth Nance', '2009'],
  ['Adam Gerber','2009'],
  ['Judy Gerstenblith', '2009'],
  ['Patti Zadnik','2009'],
  ['Junichi Yoshimura', '2009'],
  ['Graeme Woodworth', '2009'],
  ['Lee Hwang', '2009'],
  ['David Istkevich','2009'],
  ['Yu Ouyang (Charlie)', '2009'],
  ['Dan Schlattman','2009'],
  ['Nishant Kumar', '2009'],
  ['Stephanie Lin','2010'],
  ['Irma Zhang', '2010'],
  ['Daniel Poliakoff','2010'],
  ['Ursalan Khan', '2010'],
  ['Alp Yurter', '2010'],
  ['Deven Brown', '2010'],
  ['Michael Schulman', '2010'],
  ['Chen Chun (Jenny) Chang','2010'],
  ['Javad Azadi', '2010'],
  ['Peter Gurny','2010'],
  ['Robert Wicks', '2010'],
  ['Kristin Martin','2010'],
  ['Uri Hadelsberg', '2010'],
  ['Khoi Than','2011'],
  ['Matthew Bender', '2011'],
  ['Angelina She', '2011'],
  ['Marianne Hut', '2011'],
  ['Nikita Robins', '2011'],
  ['Carmen Kut', '2011'],
  ['Momen Sharab (MD)','2011'],
  ['Jeanine Reyes', '2011'],
  ['Luke Murray','2011'],
  ['Quinn Salditch', '2011'],
  ['Noam Schildhaus','2011'],
  ['Joanna Xing', '2011'],
  ['Hansen Bow','2011'],
  ['David Santiago-Dieppa', '2011'],
  ['Maritza Taylor', '2011'],
  ['Antonella Mangraviti (MD)', '2012'],
  ['Joshua Watson', '2012'],
  ['Yike Jin', '2012'],
  ['Catherine Curtis', '2012'],
  ['Christopher Polson', '2012'],
  ['Eliana (Mina) Trink','2012'],
  ['Nathan Swedlow', '2012'],
  ['Nezar Alsaeedi','2012'],
  ['Tonya Picker', '2012'],
  ['MariaLisa Itzoe','2012'],
  ['Michael Seng', '2012'],

];

const Alumni3 = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header></header>
          <main className="flex-grow">
          <h1 className='text-4xl font-bold my-4 animate-fadeIn text-center'>2007 - 2012 Alumni</h1>
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


export default Alumni3;
