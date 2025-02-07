const grade = "18+";

switch (grade) {
    case "<13":
        console.log("You are a child.");
        break;
    case "13-17":
        console.log("You are a teenager.");
        break;
    case "18+":
        console.log("You are an adult.");
        break;
    default:
        console.log("Needs Improvement");
}
