package entity;

public class Row {
    private double x;
    private double y;
    private double r;
    private boolean check;
    public Row() {
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isCheck() {
        return check;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean check(){
        return (x <= 0 && y >= 0 && x >= -r && y <= r / 2) ||
                (x <= 0 && y <= 0 && (x * x) + (y * y) <= ((r * r) / 4)) ||
                (x >= 0 && y <= 0 && x - r / 2 <= y);
    }

    @Override
    public String toString() {
        return "Row{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", check=" + check +
                '}';
    }
}
