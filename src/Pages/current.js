import React from 'react';
import team01 from '../Image_folder/Hasan.jpg';
import team02 from '../Image_folder/Aanya.jpg';
import team03 from '../Image_folder/Maryam.png';
import peter from '../Image_folder/ashley-1.png';
import emre from '../Image_folder/Emre.jpg';
import chris from '../Image_folder/Chris.jpg';
import gavin from '../Image_folder/gavin.jpg'
import Alumni from '../Components/Alumni';
import joey from '../Image_folder/joey.jpg'
import ahmad from '../Image_folder/ahmad.jpeg'
import harshal from '../Image_folder/harshal.jpg'
import hallie from '../Image_folder/hallie.JPG'
import claudia from '../Image_folder/claudia.png'
import toriyn from '../Image_folder/toriyn.jpg'
import sonny from '../Image_folder/sonny.jpg'
import alex from '../Image_folder/alex.jpeg'
import arushi from '../Image_folder/arushi.jpeg'
import dania from '../Image_folder/dania.jpg'
import divi from '../Image_folder/Raj_Divyaansh_picture.jpg'
import holly from '../Image_folder/Holly Tang.jpg'


import { View, Text, StyleSheet, ScrollView } from 'react-native';

const tableHeaders = ['Name', 'Year'];
const tableData = [
  ['Akiva Berkowitz', '2019'],
  ['Emily Yagoda', '2019'],
  ['Giorgia Antonia Simboli', '2019'],
  ['Jayanidhi Kedda', '2019'],
  ['Melina Lawton', '2019'],
  ['Molly Acord', '2019'],
  ['Nagat El Demerdash', '2019'],
  ['Namrata Darjee', '2019'],
  ['Tarana Parvez Kaovasia', '2019'],
  ['Umailla Fatima', '2019'],
  ['Vismaya Bachu', '2019'],
  ['Divyaansh Raj', '2020'],
  ['Miguel Angel Ruiz Cardozo', '2020'],
  ['Pranjal Agrawal', '2020'],
  ['Shon Shmushkevich', '2020'],
  ['Caitlin Kraft', '2021'],
  ['Chad Caraway', '2021'],
  ['Ella Reinders', '2021'],
  ['Griffin Mess', '2021'],
  ['Jennifer Lee','2021'],
  ['Jorge Rodriguez', '2021'],
  ['Lilia Sukhon', '2021'],
  ['Navya Kunadi', '2021'],
  ['Pravarakhya Puppalla','2021'],
  ['Princess Naomi Newton', '2021'],
  ['Rasika Thombre','2021'],
  ['Safwan Alomari', '2021'],
  ['Sarah Abdellah', '2021'],
  ['Victor Pacis', '2021'],
  ['Kenae Thompson','2022'],
  ['Alec Gonzaga', '2022'],
  ['Anita Kalluri','2022'],
  ['Bruno Gallo', '2022'],
  ['Min Joon Kim','2022'],
  ['Netanel Ben Shalom', '2022'],
  ['Robert Salkin','2022'],
  ['Taylor Anderson', '2022'],
  ['Hallie Gaitsch', '2022'],
  ['Adhiraj Chaudhary','2023'],
  ['Ahmad Elbeltagy', '2023'],
  ['Alexandra Jimenez-Hope','2023'],
  ['Alexandra Lee', '2023'],
  ['Arushi Devgun', '2023'],
  ['Avalon Saja', '2023'],
  ['Bikona Ghosh', '2023'],
  ['Eliana Wolf','2023'],
  ['Gavin Cressy', '2023'],
  ['Hasan Slika','2023'],
  ['Jackson Miller', '2023'],
  ['Jennifer Katz', '2023'],
  ['John Theodore', '2023'],
  ['Khushi Varshney', '2023'],
  ['Max Elikan', '2023'],
  ['Max Goldberg','2023'],
  ['Riddhpreet Wahi', '2023'],
  ['Ruchika','2023'],
  ['Sonny Ravinder', '2023'],
  ['Tatiana Abou Mrad', '2023'],
  ['Toriyn Dotson', '2023'],
  ['Adrian Hernandez', '2023'],
  ['Arham Farooq','2023'],
  ['Claudia Viton', '2024'],
  ['Peter Wang','2024'],
  ['Abdelmadjid Dahmani', '2024'],
  ['Jaiprakash Gurav', '2024'],
  ['Matthew Kaminski', '2024'],
  ['Noah Sunshine', '2024'],
  ['Manthia A. Papageorgakopoulou', '2024'],
  ['Ruth Glaun', '2024'],
  ['Shoshana Braverman', '2024'],
  ['Charlotte  Gabriel', '2024'],
  ['Harshal Shah', '2024'],
  ['Dania Alsoodany', '2024'],
  ['Etem Kaan Delibas', '2024'],
  ['Zeina Housseyki', '2024'],
  ['Zack McAlister', '2024'],
  ['Sofie Askin', '2024'],
  ['Soren Bammens', '2024'],
  ['Hansika Chennamsetty', '2024'],
  ['Makayla Biles', '2024'],
  ['Arman Ataei Kachoei', '2024'],
  ['Armin Ataei Kachoei', '2024'] 
];

const teamMembers = [
    {
        imgUrl: team01,
        name: 'Hasan Slika, MD',
        position: 'Postdoctoral Fellow',
        category: 'Postdoctoral Fellow'

    },
    {
        imgUrl: holly,
        name: 'Hollie Tang',
        position: 'Postdoctoral Fellow',
        category: 'Postdoctoral Fellow'

    },
    {
        imgUrl: hallie,
        name: 'Hallie Gaitsch',
        position: 'JHU MDPhD',
        category: 'Medical Student'

    },
    {
        imgUrl: divi,
        name: 'Divyaansh Raj',
        position: 'JHU MD',
        category: 'Medical Student'

    },
    {
        imgUrl: harshal,
        name: 'Harshal Shah',
        position: '3rd year at Hofstra/Northwell',
        category: 'Medical Student'

    },
    {
        imgUrl: dania,
        name: 'Dania Alsoodany',
        position: '4th year at KU Leuven, Belgium',
        category: 'Medical Student'

    },
    {
        imgUrl: team02,
        name: 'Aanya Shahani',
        position: 'Research Technologist', 
        category: 'Staff'
    },
    {
        imgUrl: team03,
        name: 'Maryam Amosu',
        position: 'Class of 2025 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: peter,
        name: 'Ashley Cortes',
        position: 'Class of 2025 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: chris,
        name: 'Chris Peters',
        position: 'Class of 2025 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: alex,
        name: 'Alexandra Lee',
        position: 'Class of 2025 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: gavin,
        name: 'Gavin Cressy',
        position: 'Class of 2025 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: toriyn,
        name: 'Toriyn Dotson',
        position: 'Class of 2026 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: sonny,
        name: 'Sonny Ravinder',
        position: 'Class of 2026 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: arushi,
        name: 'Arushi Devgun',
        position: 'Class of 2026 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: emre,
        name: 'Emre Derin',
        position: 'Class of 2026 at UMD', 
        category: 'Undergraduate'
    },
    {
        imgUrl: claudia,
        name: 'Claudia Viton',
        position: 'Class of 2026 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: ahmad,
        name: 'Ahmad Elbeltagy',
        position: 'Class of 2026 at JHU', 
        category: 'Undergraduate'
    },
    {
        imgUrl: joey,
        name: 'Joey Chan',
        position: 'Class of 2025 at JHU', 
        category: 'Graduate'
    },
];

const Current = () => {
    const groupByCategory = (members) => {
        return members.reduce((groups, member) =>{
            const category = member.category; 
            if(!groups[category]){
                groups[category] = [];
            }
            groups[category].push(member); 
            return groups; 
        }, {});
    }; 
    const groupedMembers = groupByCategory(teamMembers)
    return (
        <div className="flex flex-col min-h-screen">
            <header></header>
            <main className="flex-grow">
                <section className='pt-12 bg-gray-100'>
                    <div className='container mx-auto text-center mb-12'>
                        <h1 className='text-3xl black mb-2 font-bold'>Our Team</h1>
                    </div>
                    {Object.keys(groupedMembers).map((category) => (
                        <div key={category}>
                            <h2 className="text-3xl text-center my-8">{category}</h2>
                            <div className='flex justify-center flex-wrap gap-4'>
                                {groupedMembers[category].map((member, index) => (
                                    <div className='w-26 bg-white rounded-lg overflow-hidden shadow-lg' key={index}>
                                        <div className='w-full h-33 flex justify-center items-center overflow-hidden p-2'>
                                            <img src={member.imgUrl} alt="" style={{ width: '150px', height: '200px', objectFit: 'cover' }}/>
                                        </div>
                                        <div className='px-6 py-4'>
                                            <h4 className='font-bold text-xl mb-2 text-indigo-600 text-center'>{member.name}</h4>
                                            <p className='text-gray-700 text-base text-center'>{member.position}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                <h1 className='text-3xl font-bold my-4 animate-fadeIn text-center'>2019 - 2024 Alumni</h1>
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
                <div className="text-center font-bold">
                    Please <a href="mailto:btyler@jhmi.edu" className="underline text-blue-900"> email </a> Betty Tyler with any corrections
                </div>
            </main>
        </div>
    );
}

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
  


export default Current;