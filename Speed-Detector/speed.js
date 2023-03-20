const calculatePoints = () => {
    const speedInput = document.getElementById("inputspeed").value;
    const speed = parseInt(speedInput);
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    // checks the driver's speed
    if (speed <= speedLimit) {
      document.getElementById("outputSpeed").innerHTML = 'Ok';
    } else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      if (points >= 12) {
        document.getElementById("outputSpeed").innerHTML = 'License suspended';
      } else {
        document.getElementById("outputSpeed").innerHTML = `Deductable Points: ${points}`;
      }
    }
  };