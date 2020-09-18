package entity;

import java.util.List;

public class RowList {
    public static List<Row> rowList;

    public List<Row> getRowList() {
        return rowList;
    }

    public void addRow(Row row){
        rowList.add(row);
    }
}
