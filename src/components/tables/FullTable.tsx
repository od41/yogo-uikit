import React, { ComponentProps } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Heading,
  TableContainer,
  Stack,
  Flex,
  HStack,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  VStack,
  Text,
} from "@chakra-ui/react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  FilterFn,
  ColumnDef,
} from "@tanstack/react-table";

import {
  rankItem,
  compareItems,
  RankingInfo,
} from "@tanstack/match-sorter-utils";

import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
// import {
//   TableViewIcon,
//   GridViewIcon,
//   SettingsIcon,
//   EmptyDocumentIcon,
// } from "@components/base/Icons";

import { Search } from "@rootcomponents/inputs/Search";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

interface FleetTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  searchPlaceholder?: string;
  onRowClick?: (row: any) => void;
  onGlobalFilterChange?: any;
  isOptionsEnabled?: boolean;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the ranking info
  addMeta({ itemRank });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const FullTable = <T,>({
  data,
  columns,
  searchPlaceholder,
  onRowClick,
  onGlobalFilterChange,
  isOptionsEnabled = true,
}: FleetTableProps<T>) => {
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    onGlobalFilterChange: setGlobalFilter,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      globalFilter,
      rowSelection,
    },
    // debug status
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  return (
    <>
      <Stack
        w="100%"
        direction={{ base: "column", md: "row" }}
        gap={4}
        justifyContent="space-between"
        my={7}
      >
        {/* Row 2 */}
        <Flex alignItems="center">
          {/* <HStack
            alignItems="center"
            borderRadius={12}
            border='1px solid #EBEBEB'
            borderColor='iconGray.250'
            mr={5}
          >
            <IconButton
              aria-label='View as table'
              variant='iconButtonOne'
              icon={<TableViewIcon color='white' stroke='black' />}
            />
            <IconButton
              aria-label='View as grid'
              variant='iconButtonOne'
              icon={<GridViewIcon />}
            />
          </HStack> */}
          <Search
            //value={globalFilter ?? ""}
            onChange={(event: any) => onGlobalFilterChange(event.target.value)}
            placeholder={searchPlaceholder ? searchPlaceholder : undefined}
            w={{ base: "100%", md: "360px" }}
          />
        </Flex>
        <Flex w="auto" minW="300px" justify="flex-end" alignItems="center">
          <Box
            w="auto"
            color="gray.300"
            fontWeight="semibold"
            fontSize="14px"
            mr={5}
          >
            {`Page ${
              table.getState().pagination.pageIndex + 1
            } of ${table.getPageCount()}`}
          </Box>
          <Flex mr={5}>
            <IconButton
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              variant="iconButtonOne"
              aria-label="Previous page"
              icon={<ChevronLeftIcon />}
            />
            <IconButton
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              variant="iconButtonOne"
              aria-label="Next page"
              icon={<ChevronRightIcon />}
            />
          </Flex>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={IconButton}
              variant="iconButtonTwo"
              aria-label="Settings"
              onClick={() => console.log("Settings")}
              // icon={<SettingsIcon />}
            />
            <MenuList minWidth="240px">
              <MenuOptionGroup
                title="Pagination"
                type="radio"
                defaultValue={String(table.getState().pagination.pageSize)}
                onChange={(e) => {
                  table.setPageSize(Number(e));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <MenuItemOption key={pageSize} value={String(pageSize)}>
                    {pageSize} records
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Stack>

      {data.length == 0 ? (
        <VStack minH="70vh" w="100%" justifyContent="flex-start" spacing={60}>
          <TableContainer maxWidth="100%" w="100%">
            <Table variant="fleet" w="100%">
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
            </Table>
          </TableContainer>
          <VStack gap={4} px={8} py={6} bgColor="gray.50" rounded="lg">
            {/* <EmptyDocumentIcon boxSize={8} color='iconGray.300' /> */}
            <Text textStyle="h3">No results to show</Text>
          </VStack>
        </VStack>
      ) : (
        <HStack w="auto" gap={4} justifyContent="flex-start" width="100%">
          <TableContainer maxWidth="100%" w="100%">
            <Table variant="filled" w="100%">
              <Thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <Tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <Th key={header.id}>
                        {/* <Text textStyle="h4"> */}
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        {/* </Text> */}
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody>
                {table.getRowModel().rows.map((row) => (
                  <Tr
                    key={row.id}
                    rounded="md"
                    _hover={
                      onRowClick
                        ? { cursor: "pointer", bg: "brand.secondary.kappa" }
                        : { bg: "brand.secondary.kappa" }
                    }
                    onClickCapture={
                      onRowClick
                        ? (event) => {
                            const target = event.target as HTMLTableRowElement;
                            if (
                              !(
                                target.nodeName === "SPAN" ||
                                target.nodeName === "INPUT"
                              )
                            )
                              onRowClick(row.original._id);
                          }
                        : undefined
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </Tfoot>
            </Table>
          </TableContainer>
        </HStack>
      )}
    </>
  );
};
