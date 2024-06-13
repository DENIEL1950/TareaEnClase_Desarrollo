import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './ProductTable.jsx';

const ProductTable = () => {
  const [expandedRows, setExpandedRows] = useState(null); 

  const products = [ // Ejemplo de datos de productos
    { id: 1, name: 'Product 1', price: 50, category: 'Category A', rating: 4, inventoryStatus: 'In Stock', image: 'product1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Product 2', price: 70, category: 'Category B', rating: 3, inventoryStatus: 'Out of Stock', image: 'product2.jpg', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Agrega más productos según sea necesario
  ];

  const onRowExpand = (event) => {
    // Lógica opcional cuando se expande una fila
    console.log('Row expanded:', event.data);
  };

  const onRowCollapse = (event) => {
    // Lógica opcional cuando se colapsa una fila
    console.log('Row collapsed:', event.data);
  };

  const rowExpansionTemplate = (data) => {
    // Plantilla para el contenido expandido de la fila
    return (
      <div className="expanded-row-content">
        <p>Description: {data.description}</p>
        {/* Otros detalles del producto */}
      </div>
    );
  };

  return (
    <div className="product-table-container">
      <DataTable
        value={products}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
        header="Product List"
        tableStyle={{ minWidth: '60rem' }}
      >
        <Column expander style={{ width: '3rem' }} />
        <Column field="name" header="Name" sortable />
        <Column field="price" header="Price" sortable />
        <Column field="category" header="Category" sortable />
        <Column field="rating" header="Reviews" sortable />
        <Column field="inventoryStatus" header="Status" sortable />
      </DataTable>
    </div>
  );
};

export default ProductTable;