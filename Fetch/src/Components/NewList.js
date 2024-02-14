import * as React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useFetch } from "../Hooks/useFetch";
import NewItens from "./NewItens";
import useSWR from "swr";

const url = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN";
const fetcher = (url) => fetch(url).then((r) => r.json());

const NewList = () => {
  // const {isLoading, error, responseJSON}=useFetch(url)
  const { data, error } = useSWR(url, fetcher);
  if (!data) return <Text> Loading</Text>;
  // if(isLoading) return <Text> Loading</Text>
  if (error) return <Text> Error</Text>;
  return (
    <>
      <FlatList
        data={data.Data}
        renderItem={({ item }) => <NewItens {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottonWidth: StyleSheet.hairlineWidth }} />
        )}
        contentContainerStyle={{ paddingVertical: 50 }}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 32, fontWeight: "bold" }}>News </Text>
        )}
      />
    </>
  );
};

export default NewList;
