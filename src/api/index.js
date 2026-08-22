export {
    register,
    login,
    logout,
    getCurrentUser,
    isAuthenticated
} from "./auth";

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "./product";

export {
    getServices,
    getService,
    createService,
    updateService,
    deleteService
} from "./service";

export {
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking
} from "./booking";

export {
    getVehicles,
    getVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
} from "./vehicle";

export {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
} from "./order";

export {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
} from "./review";

export {
    getPayments,
    createPayment,
    getPayment,
    updatePayment,
    deletePayment,
    stkPush
} from "./payments";

export {
    getCustomerDashboard,
    getManagerDashboard,
    getWorkerDashboard
} from "./dashboard";

export {
    getAnalytics,
    getStatistics,
    getReports
} from "./analytics";

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} from "./users";

export {
    getAttendance,
    createAttendance,
    updateAttendance,
    deleteAttendance
} from "./attendance";

export {
    getSchedules,
    createSchedule,
    updateSchedule,
    deleteSchedule
} from "./schedule";

export {
    getMessages,
    getMessage,
    sendMessage,
    deleteMessage
} from "./message";

export {
    getNotifications,
    createNotification,
    markNotificationRead,
    deleteNotification
} from "./notification";

export {
    uploadFile
} from "./upload";

export {
    search
} from "./search";

export {
    checkHealth
} from "./health";