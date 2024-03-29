import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { ListItem } from '../../components/ListItem';

interface User {
  name: string;
  score: number;
  photo: string;
}

export default function Home() {
  const users: User[] = [
    {
      name: 'Johh Smith',
      score: -164,
      photo: 'https://images.unsplash.com/photo-1567324216289-97cc4134f626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Sarah Parker',
      score: 203,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww'
    },
    {
      name: 'Paul Allen',
      score: 464,
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
    },
    {
      name: 'Terry Andrews',
      score: -80,
      photo: 'https://images.unsplash.com/photo-1586796676774-c93004ae009f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww'
    },
    {
      name: 'Andy Vitale',
      score: -230,
      photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww'
    },
    {
      name: 'Katy Friedson',
      score: 160,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Growing</Text>
      <View style={styles.profile}>
        <View>
          <View style={styles.profileInfoContent}>
            <Image style={styles.profileImage} source={{uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'}} ></Image>
            <Text style={styles.profileName} >Paul Allen</Text>
          </View>
          <View style={styles.profileInfoBorderLine}></View>
        </View>
        <View style={styles.profileButtons}>
          <Button color={"#9a9a9c"} backgroundColor={"#dedfe3"} >View Profile</Button>
          <Button color={"#b5d3b6"} backgroundColor={"#719a70"}>Add User</Button>
        </View>
      </View>
      <ScrollView style={styles.profileList}>
        {users.map((user, index) => (
          <ListItem key={index} name={user.name} score={user.score} uri={user.photo} />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
