import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import { Feather, Entypo,Ionicons , Octicons} from '@expo/vector-icons';

const index = () => {
    return (
        <ScrollView>
            <LinearGradient colors={["#7f7fd5", "#e9e4f0"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Feather name="bar-chart" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>Employe Management System</Text>
                        <Entypo name="lock" size={24} color="black" />
                    </View>

                    <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:20}}>
                        <TouchableOpacity style={{backgroundColor:"#d3cce3",padding:12,borderRadius:6,alignItems:"center",justifyContent:"center", flex:1}} >
                            <View style={{width:50,height:50,borderRadius:25,backgroundColor:"white",alignItems:"center",justifyContent:"center"}} >
                            <Ionicons name="ios-people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{marginTop:7,fontWeight:"600"}} >Employee List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#d3cce3",padding:12,borderRadius:6,alignItems:"center",justifyContent:"center", flex:1}} >
                            <View style={{width:50,height:50,borderRadius:25,backgroundColor:"white",alignItems:"center",justifyContent:"center"}} >
                            <Ionicons name="ios-people-sharp" size={24} color="black" />
                            </View>
                            <Text style={{marginTop:7,fontWeight:"600"}} >Mark Attendance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20,backgroundColor:"white",paddingHorizontal:10,paddingVertical:10}}>
                        <TouchableOpacity style={{backgroundColor:"#be93c5",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}} >
                            <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}><Ionicons name="newspaper-outline" size={24} color="black" /></View>
                            <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>Attendance Report</Text>
                            <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:"center"}}><Entypo name="chevron-right" size={24} color="black" /></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#be93c5",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}} >
                            <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}><Octicons name="repo-pull" size={24} color="black" /></View>
                            <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>Summary Report</Text>
                            <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:"center"}}><Entypo name="chevron-right" size={24} color="black" /></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#be93c5",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}} >
                            <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}><Octicons name="report" size={24} color="black" /></View>
                            <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>All Generate Report</Text>
                            <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:"center"}}><Entypo name="chevron-right" size={24} color="black" /></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#be93c5",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}} >
                            <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}><MaterialIcons name="people" size={24} color="black" /></View>
                            <Text style={{marginLeft:10,fontSize:16,fontWeight:"600",flex:1}}>OverTime Employees</Text>
                            <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:"center"}}><Entypo name="chevron-right" size={24} color="black" /></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})