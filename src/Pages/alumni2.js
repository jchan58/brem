import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Alumni from '../Components/Alumni';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Leroy Williams', '2013'],
  ['Alice Huang', '2013'],
  ['Angela Wu', '2013'],
  ['Camila Velarde', '2013'],
  ['Dori Coplon ', '2013'],
  ['Gavin Hsu ', '2013'],
  ['Joe Wooley ', '2013'],
  ['Nancy Abu-Bonsrah', '2013'],
  ['Neel Ram', '2013'],
  ['Tula Raghavan', '2013'],
  ['David Rowshanshad', '2013'],
  ['Destiny Schriefer', '2013'],
  ['Iddo Paldor (MD)', '2013'],
  ['Jood Ali', '2013'],
  ['MariAngela Pedone', '2013'],
  ['Sebastian Edwards', '2013'],
  ['Ann Liu', '2014'],
  ['Cole Sterling', '2014'],
  ['David Gullotti', '2014'],
  ['Eric Sankey','2014'],
  ['Fred Lavon', '2014'],
  ['Leon Pinheiro', '2014'],
  ['Lindsey Hastings-Spaine', '2014'],
  ['Maria Veronica Vigilar','2014'],
  ['Matteo Turchetti', '2014'],
  ['Michael Stierer','2014'],
  ['Miguel Tyshing', '2014'],
  ['Nicole Sanchez', '2014'],
  ['Nitsa Buaron', '2014'],
  ['Raanan Gurewitsch','2014'],
  ['Yuan Wang', '2014'],
  ['Anjali Shankar','2015'],
  ['Francesco Volpin', '2015'],
  ['Gabrielle Frankel','2015'],
  ['Joshua Casaoas', '2015'],
  ['Julie Sessen','2015'],
  ['Madeline Lee', '2015'],
  ['Maya Takashima', '2015'],
  ['Mitchell Rock', '2015'],
  ['Nicolas Skuli','2015'],
  ['Raphael Felder', '2015'],
  ['Roey Reiss','2015'],
  ['Shazia Dharssi', '2015'],
  ['Stasa Tumpa','2015'],
  ['Sydney Worsham', '2015'],
  ['Tarik Lott','2015'],
  ['Young Sill Kang (MD)', '2015'],
  ['John Choi', '2016'],
  ['Alexander Maynard', '2016'],
  ['Eileen Xu', '2016'],
  ['Eric Xu','2016'],
  ['Jeff Ehresman', '2016'],
  ['Luckmini Liyanage','2016'],
  ['Madhura Lenninkannan', '2016'],
  ['Noah Gorelick','2016'],
  ['Sharon Xiao Wei', '2016'],
  ['Ahmed Eltahir','2017'],
  ['Arba Cecia', '2017'],
  ['Audrey Monroe', '2017'],
  ['Emily Greaves', '2017'],
  ['Francesca Kroll', '2017'],
  ['Harrison Baum', '2017'],
  ['Marisol Doglioli','2017'],
  ['Ray Fodor', '2017'],
  ['Riccardo Serra','2017'],
  ['Richard Um', '2017'],
  ['Sakibul Huq','2017'],
  ['Shayan Hemmati', '2017'],
  ['Stephanie Quintero','2017'],
  ['Tejus Pradeep', '2017'],
  ['Valentina Tagliaferri', '2017'],
  ['Andy Ding', '2018'],
  ['Angad Grewal', '2018'],
  ['Anjali Amiano', '2018'],
  ['Arman Mizani', '2018'],
  ['Ashley Yin', '2018'],
  ['Elizabeth Wicks','2018'],
  ['Hanna Antoine', '2018'],
  ['Joshua Woo','2018'],
  ['Kelly Beharry', '2018'],
  ['Lauren Guttman','2018'],
  ['Manuel Morales', '2018'],
  ['Mason Strazzella', '2018'],
  ['Nancy Anderson','2018'],
  ['Noah Freeman', '2018'],
  ['Sharmini Premananthan', '2018'],
];

const Alumni2 = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <header></header>
          <main className="flex-grow">
          <h1 className='text-3xl font-bold my-4 animate-fadeIn text-center'>2013 - 2018 Alumni</h1>
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


export default Alumni2;
