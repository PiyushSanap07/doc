const OPEN_APPOINTMENT_EVENT = 'open-appointment-modal';

export function openAppointmentModal() {
  window.dispatchEvent(new Event(OPEN_APPOINTMENT_EVENT));
}

export { OPEN_APPOINTMENT_EVENT };