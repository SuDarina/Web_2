<%@ page import="java.util.List" %>
<%@ page import="java.util.Iterator" %><%--
  Created by IntelliJ IDEA.
  User: dariasupriadkina
  Date: 12.09.2020
  Time: 16:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>LabWeb_2</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<table class="verst">
    <tr style="background-color:#85C2FF; height: 50px" class = "header">

        <td  class="left">
            <div>Supriadkina Daria, P3230</div>
        </td>

        <td class="right">
            <div>Вариант 2624</div>
        </td>
    </tr>
    <tr>
        <td>
    <table>
        <tr>
            <td>X</td>
            <td>Y</td>
            <td>R</td>
            <td>Answer</td>
            <td>Time</td>
        </tr>
        <%
           List<String> tableRows = (List<String>) request.getSession().getAttribute("tableRows");
            final Iterator<String> itr = tableRows.iterator();
            String lastElement = itr.next();

            while(itr.hasNext()) {
                lastElement=itr.next();
            }
            out.println(lastElement);
        %>
        <tr>
            <td>
                <button onclick="location.href='index.jsp'">Go Back</button>
            </td>
        </tr>
    </table>
        </td>
    </tr>
</table>


</body>
</html>
