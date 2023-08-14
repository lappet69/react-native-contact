import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Appbar,
  Button,
  DataTable,
  Modal,
  Portal,
  useTheme,
} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddContact from './AddContact';

const ListContact = () => {
  const theme = useTheme();
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      id: 1,
      name: 'John',
      phone: '082828356321',
      email: 'john@gmail.com',
      address: 'address 1',
    },
    {
      id: 2,
      name: 'Smith',
      phone: '082812628382',
      email: 'smith@gmail.com',
      address: 'address 2',
    },
    {
      id: 3,
      name: 'Mike',
      phone: '0818215992817',
      email: 'mike@gmail.com',
      address: 'address 3',
    },
    {
      id: 4,
      name: 'Momon',
      phone: '0872730592828',
      email: 'momon@gmail.com',
      address: 'address 4',
    },
  ]);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {flex: 1};
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.primary}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Appbar.Header>
            <View style={styles.listContact}>
              <Appbar.Content title="List Contact" />
              <Button
                theme={{colors: {primary: 'indigo'}}}
                mode="contained"
                onPress={showModal}>
                + Add Contact
              </Button>
            </View>
          </Appbar.Header>
          <View style={styles.container}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>Phone</DataTable.Title>
                <DataTable.Title numeric>Email</DataTable.Title>
                <DataTable.Title numeric>Address</DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.phone}</DataTable.Cell>
                  <DataTable.Cell>{item.email}</DataTable.Cell>
                  <DataTable.Cell>{item.address}</DataTable.Cell>
                </DataTable.Row>
              ))}

              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={nextPage => setPage(nextPage)}
                label={`${from + 1}-${to} of ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={'Rows per page'}
              />
            </DataTable>
          </View>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}>
              <AddContact />
            </Modal>
          </Portal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listContact: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
