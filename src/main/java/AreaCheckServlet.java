import entity.Row;
import entity.RowList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
//public class AreaCheckServlet extends HttpServlet {
//    public void formPage(Row row, HttpServletResponse resp) throws IOException {
//        String answer = "<html>\n" +
//                "  <head>\n" +
//                "    <meta charset=\"utf-8\" /> " +
//                "    <meta name=\"viewport\" content=\"width=device-width initial-scale=1\">\n" +
//                "    <title>Web Lab 2</title>\n" +
//                "    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n" +
//                "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\"\n" +
//                "          integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n" +
//                "    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"\n" +
//                "            integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\"\n" +
//                "            crossorigin=\"anonymous\"></script>\n" +
//                "  </head>" +
//                "<body>" +
//                "<div class='container'>" +
//                "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
//                "\n" +
//                "    <div class=\" mx-md-4\"></div>\n" +
//                "    <a class=\"navbar-brand\" href=\"#\">Крюков Андрей Юрьевич, P3214, вариант 2521</a>\n" +
//                "</nav>" +
//                "<table class=\"table table-dark\">\n" +
//                "  <thead>\n" +
//                "    <tr>\n" +
//                "      <th scope=\"col\">X</th>\n" +
//                "      <th scope=\"col\">Y</th>\n" +
//                "      <th scope=\"col\">R</th>\n" +
//                "      <th scope=\"col\">Result</th>\n" +
//                "    </tr>\n" +
//                "  </thead>\n" +
//                "  <tbody>\n" +
//                "    <tr>\n" +
//                "      <td>" + row.getX() + "</td>\n" +
//                "      <td>" + row.getY() + "</td>\n" +
//                "      <td>" + row.getR() + "</td>\n" +
//                "      <td>" + row.check() + "</td>\n" +
//                "    </tr>\n" +
//                "   </tbody>\n" +
//                "</table>" +
//                "<form><button type=\"submit\" class=\"btn btn-dark\">Go back</button></form>" +
//                "</div></body></html>";
//        resp.setContentType("text/html; charset=UTF-8");
//        PrintWriter out = resp.getWriter();
//        out.println(answer);
//        System.out.println(answer);
//        out.close();
//    }
//
//    @Override
//    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
//        HttpSession session = req.getSession();
//        resp.setContentType("text/html;charset=UTF-8");
//        RowList.rowList = (ArrayList<Row>) session.getAttribute("rowList");
//        if (RowList.rowList == null){
//            RowList.rowList = new ArrayList<Row>();
//        }
//
//            session.setAttribute("tableRows", RowList.rowList);
//
//            Row row = new Row();
//            double x = Double.parseDouble(req.getParameter("x"));
//            double y = Double.parseDouble(req.getParameter("y"));
//            double r = Double.parseDouble(req.getParameter("r"));
//            row.setX(x);
//            row.setY(y);
//            row.setR(r);
//            row.check();
//
//            RowList.rowList.add(row);
//            session.setAttribute("rowList", RowList.rowList);
//            RequestDispatcher requestDispatcher = req.getRequestDispatcher("answer.jsp");
//            requestDispatcher.forward(req, resp);
//
//    }
//}






















public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        HttpSession session = req.getSession();
        resp.setContentType("text/html;charset=UTF-8");
        List<String> tableRows = (List)session.getAttribute("tableRows");
        if (tableRows == null) {
            tableRows = new LinkedList<>();
            session.setAttribute("tableRows", tableRows);
            tableRows.add("<tr>" +
                    "<td>x</td>" +
                    "<td>y</td>" +
                    "<td>r</td>" +
                    "<td>Точка входит в ОДЗ</td>" +
                    "<td>Текущее время</td></tr>");
        }
        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        double r = Double.parseDouble(req.getParameter("r"));
        try{
            PrintWriter writer = resp.getWriter();
            tableRows.add("<tr>" +
                    "<td>" + x + "</td>" +
                    "<td>" + y + "</td>" +
                    "<td>" + r + "</td>" +
                    "<td>" + check(x, y, r) + "</td>" +
                    "<td>Текущее время</td></tr>");
            for (String tableRow : tableRows) writer.println(tableRow);
//            final Iterator<String> itr = tableRows.iterator();
//            String lastElement = itr.next();
//
//            while(itr.hasNext()) {
//                lastElement=itr.next();
//            }
//            writer.println(lastElement);

            RequestDispatcher requestDispatcher = req.getRequestDispatcher("answer.jsp");
            requestDispatcher.forward(req, resp);
        } catch (Exception e){
            e.printStackTrace();
        }
    }


    private boolean check(double x, double y, double r) {

        return (x <= 0 && y >= 0 && x >= -r && y <= r / 2) ||
                (x <= 0 && y <= 0 && (x * x) + (y * y) <= ((r * r) / 4)) ||
                (x >= 0 && y <= 0 && x - r / 2 <= y);

    }
}