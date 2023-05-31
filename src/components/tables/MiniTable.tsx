import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
} from "@chakra-ui/react";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  FilterFn,
  ColumnDef,
} from "@tanstack/react-table";

interface MiniTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: any) => void;
  showHead?: boolean;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the ranking info
  addMeta({ itemRank });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};


export const MiniTable = <T,>({
  data,
  columns,
  onRowClick,
  showHead = true,
}: MiniTableProps<T>) => {
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
  });

  return (
    <>
      <HStack w="auto" gap={4} justifyContent="flex-start" width="100%">
        <TableContainer maxWidth="100%" w="100%">
          <Table variant="filled" w="100%">
            {showHead && (
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
            )}
            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr
                  key={row.id}
                  // _hover={
                  //   onRowClick
                  //     ? { cursor: "pointer" }
                  //     : { cursor: "default"}
                  // }
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
                            onRowClick(row.id);
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
    </>
  );
};
