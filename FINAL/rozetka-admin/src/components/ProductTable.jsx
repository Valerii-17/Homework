import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Box,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const columns = [
    {label: "ID", field: "id"},
    {label: "Category", field: "category"},
    {label: "Name", field: "name"},
    {label: "Quantity", field: "count"},
    {label: "Price", field: "price"},
];

const ProductTable = ({
                          products,
                          onEdit,
                          onDelete,
                          onSort,
                          sortField,
                          sortOrder,
                      }) => {
    return (
        <TableContainer
            component={Paper}
            elevation={4}
            sx={{
                width: 872,
                mx: "auto",
                borderRadius: 0,
                overflow: "hidden",
            }}
        >
            <Table
                sx={{
                    tableLayout: "fixed",
                }}
            >
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.field}
                                align="center"
                                onClick={() => onSort(column.field)}
                                sx={{
                                    backgroundColor: "#0EC86F",
                                    color: "#726969",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    height: 39,
                                    p: 0,
                                    cursor: "pointer",
                                    userSelect: "none",
                                    transition: "0.2s",

                                    "&:hover": {
                                        color: "#FFFFFF",
                                    },

                                    "&:hover svg": {
                                        color: "#FFFFFF",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: 0.1,
                                    }}
                                >
                                {column.label}

                                {sortField === column.field ? (
                                    sortOrder === "asc" ? (
                                    <ArrowDropUpIcon
                                    sx={{
                                    fontSize: 24,
                                    color: "#726969",
                                    }}
                            />
                        ) : (
                            <ArrowDropDownIcon
                            sx={{
                            fontSize: 24,
                            color: "#726969",
                            }}
                    />
                    )
                    ) : (
                    <UnfoldMoreIcon
                        sx={{
                            fontSize: 18,
                            color: "#726969",


                            "&:hover": {
                                color: "#FFFFFF",
                            },
                        }}
                    />
                    )}
                </Box>
            </TableCell>
            ))}

            <TableCell
                sx={{
                    backgroundColor: "#0EC86F",
                    p: 0,
                }}
            />
        </TableRow>
</TableHead>

    <TableBody>
        {products.map((product, index) => (
            <TableRow key={product.id}>
                {[
                    product.id,
                    product.category,
                    product.name,
                    product.count,
                    Number(product.price).toLocaleString(),
                ].map((value) => (
                    <TableCell
                        key={value}
                        align="center"
                        sx={{
                            backgroundColor:
                                index % 2 === 0
                                    ? "#D5D3D3"
                                    : "#3CD78C",
                            color:
                                index % 2 === 0
                                    ? "#FFFFFF"
                                    : "#877171",
                            fontWeight: 700,
                            fontSize: 16,
                            height: 39,
                            p: 0,
                            border: "none",
                        }}
                    >
                        {value}
                    </TableCell>
                ))}

                <TableCell
                    align="center"
                    sx={{
                        backgroundColor:
                            index % 2 === 0
                                ? "#D5D3D3"
                                : "#3CD78C",
                        border: "none",
                        p: 0,
                    }}
                >
                    <IconButton
                        size="small"
                        sx={{p: 0.2}}
                        onClick={() => onEdit(product)}
                    >
                        <EditOutlinedIcon
                            sx={{
                                fontSize: 20,
                                color: "#000",
                            }}
                        />
                    </IconButton>

                    <IconButton
                        size="small"
                        onClick={() => onDelete(product)}
                    >
                        <DeleteOutlineOutlinedIcon
                            sx={{
                                fontSize: 20,
                                color: "#000",
                            }}
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
</TableContainer>
)
    ;
};

export default ProductTable;