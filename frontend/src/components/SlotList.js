const SlotList = ({ availableSlots = [] }) => {
    return (
      <div>
        <select name="time" required>
          {availableSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SlotList;
  