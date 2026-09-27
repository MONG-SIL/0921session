import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const initialForm = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export default function Signup() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    window.alert("회원가입이 완료되었습니다.");
    setForm(initialForm);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-80 flex-col gap-4"
      >
        <h1 className="title-sm text-neutral-500">회원가입</h1>

        <Input
          id="name"
          name="name"
          label="이름"
          placeholder="이름을 입력하세요"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일을 입력하세요"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
        <Input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력하세요"
          value={form.passwordConfirm}
          onChange={handleChange}
          autoComplete="new-password"
          error={error}
          required
        />

        <Button type="submit" text="회원가입" />
      </form>
    </main>
  );
}
