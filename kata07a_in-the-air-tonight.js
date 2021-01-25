const checkAir = function (samples, threshold) {
  //Define count variable for dirty and clean
  let cleanCount = 0;
  let dirtyCount = 0;

  //Loop through samples and classify the samples
  for (let sample of samples) {
    switch (sample) {
      case "clean":
        cleanCount++;
        break;

      case "dirty":
        dirtyCount++;
        break;
    }
  }

  //Determine if air is clean or polutated accoring to threshold
  if (dirtyCount / (cleanCount + dirtyCount) < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

//Print examples to the console
console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
