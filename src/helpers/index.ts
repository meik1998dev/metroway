export function generateNext30days(): { fullDate: string; dateText: string }[] {
   // Get today's date
   let today = new Date();

   // Generate an array of date objects for the next 30 days
   let dates = [];

   for (let i = 0; i < 30; i++) {
      let nextDay = new Date(
         today.getFullYear(),
         today.getMonth(),
         today.getDate() + i,
      );

      let dateString = nextDay.toLocaleDateString('en-US', {
         weekday: 'short',
         day: '2-digit',
      });

      let fullDateString = nextDay
         .toISOString()
         .split('T')[0]
         .replace(/-/g, '/');

      let dateObject = { fullDate: fullDateString, dateText: dateString };

      dates.push(dateObject);
   }

   return dates;
}
