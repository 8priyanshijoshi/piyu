// import { useEffect, useState } from "react";
// import { db } from "../../firebaseconfig";
// import {
//   collection,
//   collectionGroup,
//   getDocs
// } from "firebase/firestore";

// export default function useDashboardStats() {
//   const [stats, setStats] = useState({
//     totalBunks: 0,
//     totalSlots: 0,
//     availableSlots: 0,
//     todaysBookings: 0,
//     todaysRevenue: 0
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const bunkSnap = await getDocs(collection(db, "bunk_locations"));
//         const bunks = bunkSnap.size;

//         const slotSnap = await getDocs(collectionGroup(db, "recharge_slots"));
//         const slots = slotSnap.docs.map(doc => doc.data());

//         const available = slots.filter(slot => !slot.isBooked).length;

//         const today = new Date().toISOString().split("T")[0];
//         const bookings = slots.filter(slot => {
//           if (!slot.bookedAt) return false;
//           const bookedDate = new Date(slot.bookedAt.seconds * 1000).toISOString().split("T")[0];
//           return slot.isBooked && bookedDate === today;
//         });

//         const revenue = bookings.reduce((sum, b) => sum + (b.amountPaid || 0), 0);

//         setStats({
//           totalBunks: bunks,
//           totalSlots: slots.length,
//           availableSlots: available,
//           todaysBookings: bookings.length,
//           todaysRevenue: revenue
//         });
//       } catch (err) {
//         console.error("Error fetching dashboard stats", err);
//       }
//     };

//     fetchStats();
//   }, []);

//   return stats;
// }


import { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    totalBunks: 0,
    availableSlots: 0,
    todaysBookings: 0,
    todaysRevenue: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        let totalBunks = 0;
        let availableSlots = 0;
        let todaysBookings = 0;
        let todaysRevenue = 0;

        // Fetch bunks
        const bunkSnap = await getDocs(collection(db, "bunk_locations"));
        totalBunks = bunkSnap.size;

        // Count available slots
        for (let bunk of bunkSnap.docs) {
          const slotSnap = await getDocs(collection(db, `bunk_locations/${bunk.id}/recharge_slots`));
          slotSnap.forEach(slot => {
            if (!slot.data().isBooked) {
              availableSlots++;
            }
          });
        }

        // Fetch today's bookings from admin_bookings
        const bookingSnap = await getDocs(collection(db, "admin_bookings"));
        const today = new Date().toLocaleDateString();
        bookingSnap.forEach(doc => {
          const data = doc.data();
          if (data.bookingDate === today) {
            todaysBookings++;
            // Optional revenue calculation (e.g., ₹100 per slot)
            todaysRevenue += 120;
          }
        });

        setStats({ totalBunks, availableSlots, todaysBookings, todaysRevenue });
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err.message);
      }
    };

    fetchStats();
  }, []);

  return stats;
}

