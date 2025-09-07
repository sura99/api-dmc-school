# ใช้ official Bun image ตัวเดียวจบ
FROM oven/bun:1

WORKDIR /app

# 1) ล็อกไฟล์ก่อน → cache ดี
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# 2) คัดลอก source
COPY . .

# 3) expose port 3000 (ค่า default ของ Elysia)
EXPOSE 3000

# 4) รัน
CMD ["bun", "src/index.ts"]