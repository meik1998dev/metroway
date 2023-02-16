export function generateNext30days(): { fullDate: string; dateText: string }[] {
   const next30Days = [];
   const today = new Date();

   for (let i = 0; i < 30; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      const fullDate = `${
         date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;
      const dateText = date.toLocaleString('default', {
         day: 'numeric',
         month: 'short',
      });
      next30Days.push({ fullDate, dateText });
   }

   return next30Days;
}

export function getTimeDuration(timeDepart: string, timeArrival: string) {
   const [hoursDepart, minutesDepart] = timeDepart.split(':').map(Number);
   const [hoursArrival, minutesArrival] = timeArrival.split(':').map(Number);

   const dateDepart = new Date(0, 0, 0, hoursDepart, minutesDepart);
   const dateArrival = new Date(0, 0, 0, hoursArrival, minutesArrival);

   let durationMinutes = (dateArrival.getTime() - dateDepart.getTime()) / 60000;
   const durationHours = Math.floor(durationMinutes / 60);
   durationMinutes = durationMinutes % 60;

   return `${durationHours} hours ${durationMinutes} mins`;
}
