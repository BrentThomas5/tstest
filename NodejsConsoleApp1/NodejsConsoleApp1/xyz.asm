default rel
section .text
global main
main:
push qword 1
mov rax, __float64__(2.999)
push rax
movq xmm0, [rsp]
add rsp, 8
roundsd xmm0, xmm0, 0xb
cvtsd2si rax, xmm0
push rax
pop rbx
pop rax
add rax, rbx
push rax
mov rax, __float64__(3.5)
push rax
movq xmm0, [rsp]
add rsp, 8
roundsd xmm0, xmm0, 0xb
cvtsd2si rax, xmm0
push rax
pop rbx
pop rax
add rax, rbx
push rax
pop rax
ret
ret
section .data