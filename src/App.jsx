import Button from "@mui/material/Button";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useColorScheme } from "@mui/material/styles";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}
function App() {
  return (
    <>
      <ModeToggle />
      <div>DipLamTuan</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessTimeFilledIcon />
    </>
  );
}

export default App;
