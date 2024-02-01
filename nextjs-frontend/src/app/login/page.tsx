import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { loginAction } from "../../server-actions/auth.action";
import { AuthService } from "../../services/auth.service";
import { redirect } from "next/navigation";
// import { Form } from "../../components/Form";

async function LoginPage({
  searchParams,
}: {
  searchParams: { redirect_to?: string };
}) {
  const { redirect_to = "/products" } = searchParams;
  const authService = new AuthService();
  const user = authService.getUser();
  
  if (user && !authService.isTokenExpired()) {
    redirect(redirect_to);
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Entre com sua conta
      </Typography>
      <Box component={"form"} noValidate sx={{ mt: 1 }} action={loginAction}>
        <input type="hidden" name="redirect_to" value={redirect_to} />
        <TextField
          margin="normal"
          required
          fullWidth
          label="E-mail"
          name="email"
          autoComplete="email"
          defaultValue={"john"}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
          defaultValue={"john"}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
