// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import {
//   Container,
//   Typography,
//   Box,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const Admin = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [lastOrderId, setLastOrderId] = useState(null);
//   const [filter, setFilter] = useState("all"); // Default filter is 'all'
//   const navigate = useNavigate();

//   // Fetch data from Firebase
//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(
//         "https://check-18079-default-rtdb.firebaseio.com/ff.json"
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch data.");
//       }
//       const data = await response.json();

//       // Convert object data to array and sort by timestamp (descending order)
//       const formattedData = Object.entries(data)
//         .map(([id, order]) => ({
//           id,
//           ...order,
//         }))
//         .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Descending order

//       // Check for new orders
//       if (formattedData.length > 0) {
//         const latestOrder = formattedData[0]; // Latest order is first after sorting
//         if (lastOrderId !== latestOrder.id) {
//           Swal.fire({
//             icon: "info",
//             title: "New Order!",
//             text: `New order from ${latestOrder.name} at table ${latestOrder.tableNumber}.`,
//             timer: 5000,
//           });

//           setLastOrderId(latestOrder.id);
//         }
//       }

//       setOrders(formattedData);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Failed to load orders. Please try again later.",
//       });
//       console.error("Error fetching orders:", error);
//     }
//   };

//   // Mark order as completed
//   const markAsDone = async (orderId) => {
//     try {
//       await fetch(
//         `https://check-18079-default-rtdb.firebaseio.com/ff/${orderId}.json`,
//         {
//           method: "PATCH",
//           body: JSON.stringify({ status: "Completed" }),
//         }
//       );

//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order.id === orderId ? { ...order, status: "Completed" } : order
//         )
//       );

//       Swal.fire({
//         icon: "success",
//         title: "Order Marked as Completed!",
//         timer: 2000,
//       });
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Failed to Update Order!",
//         text: "Please try again.",
//       });
//     }
//   };

//   // Navigate to the bill page
//   const printBill = (order) => {
//     navigate("/bill", { state: { order } });
//   };

//   // Apply filters to the orders
//   const getFilteredOrders = () => {
//     const now = new Date();

//     switch (filter) {
//       case "today":
//         return orders.filter((order) => {
//           const orderDate = new Date(order.timestamp);
//           return (
//             orderDate.getDate() === now.getDate() &&
//             orderDate.getMonth() === now.getMonth() &&
//             orderDate.getFullYear() === now.getFullYear()
//           );
//         });
//       case "last7":
//         return orders.filter((order) => {
//           const orderDate = new Date(order.timestamp);
//           const diffTime = now - orderDate;
//           const diffDays = diffTime / (1000 * 60 * 60 * 24);
//           return diffDays <= 7;
//         });
//       case "completed":
//         return orders.filter((order) => order.status === "Completed");
//       case "pending":
//         return orders.filter((order) => order.status !== "Completed");
//       default:
//         return orders; // All orders
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 1000);
//     return () => clearInterval(interval);
//   }, [lastOrderId]);

//   const filteredOrders = getFilteredOrders();

//   return (
//     <Box>
//       {/* Header */}
//       <Box
//         sx={{
//           background: "linear-gradient(to right, #4caf50, #2196f3)",
//           color: "#fff",
//           padding: "16px",
//         }}
//       >
//         <Container>
//           <Typography variant="h4" fontWeight="bold">
//             Admin Dashboard
//           </Typography>
//         </Container>
//       </Box>

//       {/* Main Content */}
//       <Container sx={{ mt: 3 }}>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h5">Orders</Typography>
//           <Select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             size="small"
//           >
//             <MenuItem value="all">All Orders</MenuItem>
//             <MenuItem value="today">Today’s Orders</MenuItem>
//             <MenuItem value="last7">Last 7 Days</MenuItem>
//             <MenuItem value="completed">Completed Orders</MenuItem>
//             <MenuItem value="pending">Pending Orders</MenuItem>
//           </Select>
//         </Box>

//         {/* Loading State */}
//         {loading ? (
//           <Box textAlign="center" mt={6}>
//             <CircularProgress />
//           </Box>
//         ) : filteredOrders.length > 0 ? (
//           <TableContainer component={Paper} sx={{ mt: 3 }}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Table Number</TableCell>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Contact</TableCell>
//                   <TableCell>Total Price</TableCell>
//                   <TableCell>Items</TableCell>
//                   <TableCell>Time</TableCell>
//                   <TableCell>Status</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredOrders.map((order) => (
//                   <TableRow key={order.id}>
//                     <TableCell>{order.tableNumber}</TableCell>
//                     <TableCell>{order.name}</TableCell>
//                     <TableCell>{order.contact}</TableCell>
//                     <TableCell>₹{order.totalPrice}</TableCell>
//                     <TableCell>
//                       {order.cartItems.map((item, index) => (
//                         <div key={item.id || index}>
//                           {item.name} x {item.qty} (₹{item.price * item.qty})
//                         </div>
//                       ))}
//                     </TableCell>
//                     <TableCell>
//                       {new Date(order.timestamp).toLocaleString()}
//                     </TableCell>
//                     <TableCell>{order.status || "Pending"}</TableCell>
//                     <TableCell>
//                       <Button
//                         variant="contained"
//                         color="success"
//                         size="small"
//                         onClick={() => markAsDone(order.id)}
//                         sx={{ mr: 1 }}
//                       >
//                         Done
//                       </Button>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         size="small"
//                         onClick={() => printBill(order)}
//                       >
//                         Print
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         ) : (
//           <Typography textAlign="center" mt={6}>
//             No orders found.
//           </Typography>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default Admin;
























































// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Container,
//   Typography,
//   Box,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   CircularProgress,
//   TextField,
//   IconButton,
//   Grid,
//   TablePagination,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Brightness4, Brightness7 } from "@mui/icons-material";

// const Admin = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [lastOrderId, setLastOrderId] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [darkMode, setDarkMode] = useState(false);
//   const [rowsPerPage, setRowsPerPage] = useState(10); // Orders per page
//   const [currentPage, setCurrentPage] = useState(0); // Current page
//   const navigate = useNavigate();

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });
//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(
//         "https://check-18079-default-rtdb.firebaseio.com/ff.json"
//       );
//       if (!response.ok) throw new Error("Failed to fetch data.");
//       const data = await response.json();
//       const formattedData = Object.entries(data)
//         .map(([id, order]) => ({ id, ...order }))
//         .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
//       if (formattedData.length > 0) {
//         const latestOrder = formattedData[0];
//         if (lastOrderId !== latestOrder.id) {
//           const orderTime = new Date(latestOrder.timestamp).toLocaleTimeString(); // Format time
//           toast.info(`🛎️ New Order from ${latestOrder.name} at ${orderTime}`, {
//             position: "top-right",
//             autoClose: 5000,
//           });
//           setLastOrderId(latestOrder.id);
//         }
//       }
//       setOrders(formattedData);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error("❌ Failed to load orders.");
//     }
//   };
  

//   const markAsDone = async (orderId) => {
//     try {
//       await fetch(
//         `https://check-18079-default-rtdb.firebaseio.com/ff/${orderId}.json`,
//         {
//           method: "PATCH",
//           body: JSON.stringify({ status: "Completed" }),
//         }
//       );
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order.id === orderId ? { ...order, status: "Completed" } : order
//         )
//       );
//       toast.success("✅ Order marked as Completed!");
//     } catch (error) {
//       toast.error("❌ Failed to update order.");
//     }
//   };

//   const printBill = (order) => {
//     navigate("/bill", { state: { order } });
//   };

//   const getFilteredOrders = () => {
//     const now = new Date();
//     let filtered = orders;

//     if (filter === "today") {
//       filtered = orders.filter((order) => {
//         const orderDate = new Date(order.timestamp);
//         return (
//           orderDate.getDate() === now.getDate() &&
//           orderDate.getMonth() === now.getMonth() &&
//           orderDate.getFullYear() === now.getFullYear()
//         );
//       });
//     } else if (filter === "last7") {
//       filtered = orders.filter((order) => {
//         const orderDate = new Date(order.timestamp);
//         return (now - orderDate) / (1000 * 60 * 60 * 24) <= 7;
//       });
//     } else if (filter === "completed") {
//       filtered = orders.filter((order) => order.status === "Completed");
//     } else if (filter === "pending") {
//       filtered = orders.filter((order) => order.status !== "Completed");
//     }

//     return filtered.filter((order) =>
//       [order.contact?.toString(), order.tableNumber?.toString()]
//         .join(" ")
//         .includes(search)
//     );
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 1000);
//     return () => clearInterval(interval);
//   }, [lastOrderId]);

//   const filteredOrders = getFilteredOrders();

//   const handleChangePage = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(0);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ backgroundColor: darkMode ? "#121212" : "#f5f5f5", minHeight: "100vh" }}>
//         <ToastContainer />
//         <Box
//           sx={{
//             background: "linear-gradient(to right, #4caf50, #2196f3)",
//             color: "#fff",
//             py: 2,
//             px: 3,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold">
//             Admin Dashboard
//           </Typography>
//           <IconButton onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? <Brightness7 /> : <Brightness4 />}
//           </IconButton>
//         </Box>

//         <Container sx={{ mt: 3 }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Search (# Mobile Number)"
//                 variant="outlined"
//                 size="small"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 size="small"
//                 fullWidth
//               >
//                 <MenuItem value="all">All Orders</MenuItem>
//                 <MenuItem value="today">Today’s Orders</MenuItem>
//                 <MenuItem value="last7">Last 7 Days</MenuItem>
//                 <MenuItem value="completed">Completed Orders</MenuItem>
//                 <MenuItem value="pending">Pending Orders</MenuItem>
//               </Select>
//             </Grid>
//           </Grid>

//           {loading ? (
//             <Box textAlign="center" mt={6}>
//               <CircularProgress />
//             </Box>
//           ) : filteredOrders.length > 0 ? (
//             <>
//               <TableContainer component={Paper} sx={{ mt: 3, overflowX: "auto" }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Table Number</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Contact</TableCell>
//                       <TableCell>Total Price</TableCell>
//                       <TableCell>Items</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Status</TableCell>
//                       <TableCell>Special Instructions</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {filteredOrders
//                       .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
//                       .map((order) => (
//                         <TableRow key={order.id}>
//                           <TableCell>{order.tableNumber}</TableCell>
//                           <TableCell>{order.name}</TableCell>
//                           <TableCell>{order.contact}</TableCell>
//                           <TableCell>₹{order.totalPrice}</TableCell>
//                           <TableCell>
//                             {order.cartItems.map((item, idx) => (
//                               <div key={idx}>
//                                 {item.name} x {item.qty} (₹{item.price * item.qty})
//                               </div>
//                             ))}
//                           </TableCell>
//                           <TableCell>{new Date(order.timestamp).toLocaleString()}</TableCell>
//                           <TableCell>{order.status || "Pending"}</TableCell>
//                           <TableCell>{order.specialInstructions || "N/A"}</TableCell>
//                           <TableCell>
//                             <Button
//                               variant="contained"
//                               color="success"
//                               size="small"
//                               onClick={() => markAsDone(order.id)}
//                             >
//                               Done
//                             </Button>
//                             <Button
//                               variant="contained"
//                               color="primary"
//                               size="small"
//                               onClick={() => printBill(order)}
//                             >
//                               Print
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 component="div"
//                 count={filteredOrders.length}
//                 page={currentPage}
//                 onPageChange={handleChangePage}
//                 rowsPerPage={rowsPerPage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </>
//           ) : (
//             <Typography textAlign="center" mt={6}>
//               No orders found.
//             </Typography>
//           )}
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default Admin;


















































// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
// import { useNavigate } from "react-router-dom";

// const Admin = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [lastOrderId, setLastOrderId] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   // Fetch data from Firebase
//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(
//         "https://check-18079-default-rtdb.firebaseio.com/ff.json"
//       );
//       if (!response.ok) throw new Error("Failed to fetch data.");

//       const data = await response.json();
//       const formattedData = Object.entries(data)
//         .map(([id, order]) => ({ id, ...order }))
//         .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//       setOrders(formattedData);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error("❌ Failed to load orders.");
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 1000);
//     return () => clearInterval(interval);
//   }, [lastOrderId]);

//   // Total Orders and Orders for Last 7 Days
//   const now = new Date();
//   const last7Days = Array.from({ length: 7 }).map((_, index) => {
//     const day = new Date();
//     day.setDate(now.getDate() - index);
//     return { date: day.toLocaleDateString(), count: 0 };
//   });

//   orders.forEach((order) => {
//     const orderDate = new Date(order.timestamp).toLocaleDateString();
//     last7Days.forEach((day) => {
//       if (day.date === orderDate) day.count += 1;
//     });
//   });

//   // Prepare Data for Pie Chart (Order Status Breakdown)
//   const completedOrders = orders.filter((order) => order.status === "Completed").length;
//   const pendingOrders = orders.length - completedOrders;
//   const pieData = [
//     { name: "Completed", value: completedOrders },
//     { name: "Pending", value: pendingOrders },
//   ];
//   const COLORS = ["#4caf50", "#ff9800"];

//   // Inline Styles (CSS-in-JS)
//   const styles = {
//     root: {
//       backgroundColor: "#121212",
//       color: "#e0e0e0",
//       fontFamily: "Arial, sans-serif",
//       padding: "20px",
//     },
//     header: {
//       background: "linear-gradient(to right, #4caf50, #2196f3)",
//       padding: "20px",
//       textAlign: "center",
//     },
//     headerTitle: {
//       margin: 0,
//     },
//     metrics: {
//       marginTop: "30px",
//     },
//     metricsTitle: {
//       marginBottom: "20px",
//     },
//     charts: {
//       display: "flex",
//       gap: "20px",
//       flexWrap: "wrap",
//     },
//     chart: {
//       backgroundColor: "#1e1e1e",
//       padding: "20px",
//       borderRadius: "8px",
//       width: "100%",
//       maxWidth: "600px",
//     },
//     chartTitle: {
//       marginTop: "0",
//     },
//     orders: {
//       marginTop: "40px",
//     },
//     ordersHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "15px",
//     },
//     ordersFilters: {
//       display: "flex",
//       gap: "10px",
//     },
//     input: {
//       padding: "8px",
//       border: "1px solid #444",
//       backgroundColor: "#333",
//       color: "#fff",
//       borderRadius: "4px",
//     },
//     select: {
//       padding: "8px",
//       border: "1px solid #444",
//       backgroundColor: "#333",
//       color: "#fff",
//       borderRadius: "4px",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//       marginTop: "20px",
//     },
//     tableHeader: {
//       backgroundColor: "#333",
//       textAlign: "left",
//     },
//     tableCell: {
//       padding: "10px",
//       border: "1px solid #444",
//     },
//     loading: {
//       textAlign: "center",
//       marginTop: "40px",
//     },
//     noOrders: {
//       textAlign: "center",
//       marginTop: "40px",
//     },
//   };

//   return (
//     <div style={styles.root}>
//       <ToastContainer />

//       {/* Header */}
//       <div style={styles.header}>
//         <h1 style={styles.headerTitle}>Admin Dashboard</h1>
//       </div>

//       {/* Dashboard Metrics */}
//       <div style={styles.metrics}>
//         <h2 style={styles.metricsTitle}>Dashboard Metrics</h2>

//         <div style={styles.charts}>
//           {/* Bar Chart for Last 7 Days */}
//           <div style={styles.chart}>
//             <h3 style={styles.chartTitle}>Orders Over Last 7 Days</h3>
//             <BarChart width={600} height={300} data={last7Days.reverse()}>
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="count" fill="#2196f3" />
//             </BarChart>
//           </div>

//           {/* Pie Chart for Order Status */}
//           <div style={styles.chart}>
//             <h3 style={styles.chartTitle}>Order Status Breakdown</h3>
//             <PieChart width={400} height={300}>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 labelLine={false}
//                 outerRadius={120}
//                 fill="#8884d8"
//                 dataKey="value"
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                 ))}
//               </Pie>
//               <Legend />
//               <Tooltip />
//             </PieChart>
//           </div>
//         </div>
//       </div>

//       {/* Existing Order Table */}
//       <div style={styles.orders}>
//         <div style={styles.ordersHeader}>
//           <h2>Orders</h2>
//           <div style={styles.ordersFilters}>
//             <input
//               type="text"
//               placeholder="Search (Contact or Table #)"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={styles.input}
//             />
//             <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.select}>
//               <option value="all">All Orders</option>
//               <option value="today">Today’s Orders</option>
//               <option value="last7">Last 7 Days</option>
//               <option value="completed">Completed</option>
//               <option value="pending">Pending</option>
//             </select>
//           </div>
//         </div>

//         {/* Table */}
//         {loading ? (
//           <div style={styles.loading}>Loading...</div>
//         ) : orders.length > 0 ? (
//           <table style={styles.table}>
//             <thead>
//               <tr style={styles.tableHeader}>
//                 <th style={styles.tableCell}>Table #</th>
//                 <th style={styles.tableCell}>Name</th>
//                 <th style={styles.tableCell}>Contact</th>
//                 <th style={styles.tableCell}>Total Price</th>
//                 <th style={styles.tableCell}>Time</th>
//                 <th style={styles.tableCell}>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id}>
//                   <td style={styles.tableCell}>{order.tableNumber}</td>
//                   <td style={styles.tableCell}>{order.name}</td>
//                   <td style={styles.tableCell}>{order.contact}</td>
//                   <td style={styles.tableCell}>₹{order.totalPrice}</td>
//                   <td style={styles.tableCell}>{new Date(order.timestamp).toLocaleString()}</td>
//                   <td style={styles.tableCell}>{order.status || "Pending"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <div style={styles.noOrders}>No orders found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Admin;




// import React, { useState, useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   Container,
//   Typography,
//   Box,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   CircularProgress,
//   TextField,
//   IconButton,
//   Grid,
//   TablePagination,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Brightness4, Brightness7 } from "@mui/icons-material";
// import emailjs from "emailjs-com";

// const Admin = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [lastOrderId, setLastOrderId] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");
//   const [darkMode, setDarkMode] = useState(false);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(0);
//   const navigate = useNavigate();

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });

//   const printBill = (order) => {
//     const printContent = `
//       Order ID: ${order.id}
//       Table Number: ${order.tableNumber}
//       Name: ${order.name}
//       Contact: ${order.contact}
//       Items:
//       ${order.cartItems
//         .map((item) => `${item.name} x ${item.qty} (₹${item.price * item.qty})`)
//         .join("\n")}
//       Total Price: ₹${order.totalPrice}
//       Special Instructions: ${order.specialInstructions || "N/A"}
//       Time: ${new Date(order.timestamp).toLocaleString()}
//     `;
//     const newWindow = window.open("", "_blank", "width=800,height=600");
//     newWindow.document.write(`<pre>${printContent}</pre>`);
//     newWindow.print();
//     newWindow.close();
//   };

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(
//         "https://check-18079-default-rtdb.firebaseio.com/ff.json"
//       );
//       if (!response.ok) throw new Error("Failed to fetch data.");
//       const data = await response.json();
//       const formattedData = Object.entries(data)
//         .map(([id, order]) => ({ id, ...order }))
//         .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//       if (formattedData.length > 0) {
//         const latestOrder = formattedData[0];
//         if (lastOrderId !== latestOrder.id) {
//           const orderTime = new Date(latestOrder.timestamp).toLocaleTimeString();
//           toast.info(`🛎️ New Order from ${latestOrder.name} at ${orderTime}`, {
//             position: "top-right",
//             autoClose: 5000,
//           });
//           setLastOrderId(latestOrder.id);
//         }
//       }
//       setOrders(formattedData);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error("❌ Failed to load orders.");
//     }
//   };

//   const getFilteredOrders = () => {
//     const now = new Date();
//     let filtered = orders;

//     if (filter === "today") {
//       filtered = orders.filter((order) => {
//         const orderDate = new Date(order.timestamp);
//         return (
//           orderDate.getDate() === now.getDate() &&
//           orderDate.getMonth() === now.getMonth() &&
//           orderDate.getFullYear() === now.getFullYear()
//         );
//       });
//     } else if (filter === "last7") {
//       filtered = orders.filter((order) => {
//         const orderDate = new Date(order.timestamp);
//         return (now - orderDate) / (1000 * 60 * 60 * 24) <= 7;
//       });
//     } else if (filter === "completed") {
//       filtered = orders.filter((order) => order.status === "Completed");
//     } else if (filter === "pending") {
//       filtered = orders.filter((order) => order.status !== "Completed");
//     }

//     return filtered.filter((order) =>
//       [order.contact?.toString(), order.tableNumber?.toString()]
//         .join(" ")
//         .includes(search)
//     );
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(fetchOrders, 1000);
//     return () => clearInterval(interval);
//   }, [lastOrderId]);

//   const filteredOrders = getFilteredOrders();

//   const handleChangePage = (event, newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(0);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ backgroundColor: darkMode ? "#121212" : "#f5f5f5", minHeight: "100vh" }}>
//         <ToastContainer />
//         <Box
//           sx={{
//             background: "linear-gradient(to right, #4caf50, #2196f3)",
//             color: "#fff",
//             py: 2,
//             px: 3,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold">
//             Admin Dashboard
//           </Typography>
//           <IconButton onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? <Brightness7 /> : <Brightness4 />}
//           </IconButton>
//         </Box>

//         <Container sx={{ mt: 3 }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Search (# Mobile Number)"
//                 variant="outlined"
//                 size="small"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Select
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value)}
//                 size="small"
//                 fullWidth
//               >
//                 <MenuItem value="all">All Orders</MenuItem>
//                 <MenuItem value="today">Today’s Orders</MenuItem>
//                 <MenuItem value="last7">Last 7 Days</MenuItem>
//                 <MenuItem value="completed">Completed Orders</MenuItem>
//                 <MenuItem value="pending">Pending Orders</MenuItem>
//               </Select>
//             </Grid>
//           </Grid>

//           {loading ? (
//             <Box textAlign="center" mt={6}>
//               <CircularProgress />
//             </Box>
//           ) : filteredOrders.length > 0 ? (
//             <>
//               <TableContainer component={Paper} sx={{ mt: 3, overflowX: "auto" }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Table Number</TableCell>
//                       <TableCell>Name</TableCell>
//                       <TableCell>Contact</TableCell>
//                       <TableCell>Total Price</TableCell>
//                       <TableCell>Items</TableCell>
//                       <TableCell>Time</TableCell>
//                       <TableCell>Status</TableCell>
//                       <TableCell>Special Instructions</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {filteredOrders
//                       .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
//                       .map((order) => (
//                         <TableRow key={order.id}>
//                           <TableCell>{order.tableNumber}</TableCell>
//                           <TableCell>{order.name}</TableCell>
//                           <TableCell>{order.contact}</TableCell>
//                           <TableCell>₹{order.totalPrice}</TableCell>
//                           <TableCell>
//                             {order.cartItems.map((item, idx) => (
//                               <div key={idx}>
//                                 {item.name} x {item.qty} (₹{item.price * item.qty})
//                               </div>
//                             ))}
//                           </TableCell>
//                           <TableCell>{new Date(order.timestamp).toLocaleString()}</TableCell>
//                           <TableCell>{order.status || "Pending"}</TableCell>
//                           <TableCell>{order.specialInstructions || "N/A"}</TableCell>
//                           <TableCell>
//                             <Button
//                               variant="contained"
//                               color="success"
//                               size="small"
//                               onClick={() => printBill(order)}
//                             >
//                               Print Bill
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//               <TablePagination
//                 component="div"
//                 count={filteredOrders.length}
//                 page={currentPage}
//                 onPageChange={handleChangePage}
//                 rowsPerPage={rowsPerPage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </>
//           ) : (
//             <Typography textAlign="center" mt={6}>
//               No orders found.
//             </Typography>
//           )}
//         </Container>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default Admin;



























































import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Typography,
  Box,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  CircularProgress,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastOrderId, setLastOrderId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  // Fetch data from Firebase
  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://check-18079-default-rtdb.firebaseio.com/ff.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }
      const data = await response.json();

      const formattedData = Object.entries(data)
        .map(([id, order]) => ({
          id,
          ...order,
        }))
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      if (formattedData.length > 0) {
        const latestOrder = formattedData[0];
        if (lastOrderId !== latestOrder.id) {
          toast.info(
            `New order from ${latestOrder.name} at table ${latestOrder.tableNumber}.`,
            { autoClose: 5000 }
          );
          setLastOrderId(latestOrder.id);
        }
      }

      setOrders(formattedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to load orders. Please try again later.");
    }
  };

  // Mark order as completed
  const markAsDone = async (orderId) => {
    try {
      await fetch(
        `https://check-18079-default-rtdb.firebaseio.com/ff/${orderId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: "Completed" }),
        }
      );

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: "Completed" } : order
        )
      );

      toast.success("Order marked as completed!");
    } catch (error) {
      toast.error("Failed to update order. Please try again.");
    }
  };

  // Navigate to the bill page
  const printBill = (order) => {
    navigate("/bill", { state: { order } });
  };

  // Apply filters to the orders
  const getFilteredOrders = () => {
    const now = new Date();

    switch (filter) {
      case "today":
        return orders.filter((order) => {
          const orderDate = new Date(order.timestamp);
          return (
            orderDate.getDate() === now.getDate() &&
            orderDate.getMonth() === now.getMonth() &&
            orderDate.getFullYear() === now.getFullYear()
          );
        });
      case "last7":
        return orders.filter((order) => {
          const orderDate = new Date(order.timestamp);
          const diffTime = now - orderDate;
          const diffDays = diffTime / (1000 * 60 * 60 * 24);
          return diffDays <= 7;
        });
      case "completed":
        return orders.filter((order) => order.status === "Completed");
      case "pending":
        return orders.filter((order) => order.status !== "Completed");
      default:
        return orders;
    }
  };

  // Get paginated data
  const getPaginatedOrders = () => {
    const startIndex = currentPage * rowsPerPage;
    return getFilteredOrders().slice(startIndex, startIndex + rowsPerPage);
  };

  // Handle pagination change
  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 1000);
    return () => clearInterval(interval);
  }, [lastOrderId]);

  const filteredOrders = getFilteredOrders();
  const paginatedOrders = getPaginatedOrders();

  return (
    <Box>
      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header */}
      <Box
        sx={{
          background: "linear-gradient(to right, #4caf50, #2196f3)",
          color: "#fff",
          padding: "16px",
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold">
            Admin Dashboard
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container sx={{ mt: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Orders</Typography>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            size="small"
          >
            <MenuItem value="all">All Orders</MenuItem>
            <MenuItem value="today">Today’s Orders</MenuItem>
            <MenuItem value="last7">Last 7 Days</MenuItem>
            <MenuItem value="completed">Completed Orders</MenuItem>
            <MenuItem value="pending">Pending Orders</MenuItem>
          </Select>
        </Box>

        {/* Loading State */}
        {loading ? (
          <Box textAlign="center" mt={6}>
            <CircularProgress />
          </Box>
        ) : filteredOrders.length > 0 ? (
          <>
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Table Number</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.tableNumber}</TableCell>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order.contact}</TableCell>
                      <TableCell>₹{order.totalPrice}</TableCell>
                      <TableCell>
                        {order.cartItems.map((item, index) => (
                          <div key={item.id || index}>
                            {item.name} x {item.qty} (₹{item.price * item.qty})
                          </div>
                        ))}
                      </TableCell>
                      <TableCell>
                        {new Date(order.timestamp).toLocaleString()}
                      </TableCell>
                      <TableCell>{order.status || "Pending"}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => markAsDone(order.id)}
                          sx={{ mr: 1 }}
                        >
                          Done
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => printBill(order)}
                        >
                          Print
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
              component="div"
              count={filteredOrders.length}
              page={currentPage}
              onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleRowsPerPageChange}
              rowsPerPageOptions={[5, 10, 15, 20]}
            />
          </>
        ) : (
          <Typography textAlign="center" mt={6}>
            No orders found.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Admin;
