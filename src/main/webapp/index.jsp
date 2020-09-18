<%@ page import="java.util.ArrayList" %>
<%@ page import="entity.Row" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: dariasupriadkina
  Date: 04.09.2020
  Time: 14:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>
    LabWork_2
  </title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" type="text/css" href="buttons.css">
  <script type="text/javascript" src="jquery-3.5.1.js"></script>
  <script type="text/javascript" src="script.js"></script>
  <script type="text/javascript" src="graphic.js"></script>
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

  <!--    фон-->
  <tr style="height: 700px; border: 2px solid whitesmoke; border-collapse: collapse; background: #ffffff">
    <!--        фон-->
    <!--        здесь можно прописать границу между частями страницы-->
    <td style="width: 55%; border: 2px solid whitesmoke; background: #ffffff;">
      <!--            Место для графика + кнопки-->

      <table style="width: 100%">
        <tr>
          <td style="width: 50%;">

            <!--                        ГРАФИК-->
            <canvas id="graphic" width="400" height="400">Not Allowed</canvas>

          </td>
          <td>

            <!--                        заполняемая форма-->
            <form>
              <table>
                <tr style="height: 30%; width: 100%">
                  <td>
                    <label>
                      <!--                                        значение по y-->
                      Y Value:<br>
                      <input id="inY" type="number">
                    </label>
                  </td>
                  <td style="width: 25%">

                    <div>
                      <!--                                        значение по r-->
                      R Value:<br>
                      <input type = 'checkbox' class="r" value="v1" name="R">
                      <label>1</label>
                      <br />

                      <input type = 'checkbox' class="r" value="v15" name="R">
                      <label>1,5</label>
                      <br />

                      <input type = 'checkbox' class="r" value="v2" name="R">
                      <label>2</label>
                      <br />

                      <input type = 'checkbox' class="r" value="v25" name="R">
                      <label>2,5</label>
                      <br />

                      <input type = 'checkbox' class="r" value="v3" name="R">
                      <label>3</label>
                      <br />

                    </div>

                  </td>
                </tr>

                <!--                            значение по X-->

                <tr style="height: 10%">
                  <td>
                    <div>X Value:</div>
                    <label>
                      <select id = "inX">
                        <option>-5</option>
                        <option>-4</option>
                        <option>-3</option>
                        <option>-2</option>
                        <option>-1</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </label>
                  </td>

                </tr>

                <tr>
                  <td class="send_wrapper">
                    <button class="send_button" type="button" id="send" aria-label="center"> Отправить</button><br>
                    <button class="send_button" type="button" id="clear" aria-label="center"> Очистить </button>
                  </td>
                </tr>

                <!--                                сообщения-->
                <tr id = "answer" style="text-align: center"></tr>
                <tr id = "first_line" style="text-align: center"></tr>

              </table>
            </form>
          </td>
        </tr>
      </table>
    </td>
    <td>
      <!--            Место для контента (таблица)-->

      <table id = "main-table">

      <%
//          out.print(request.getSession().getAttribute("rowList"));
//          System.out.println(request.getSession().getAttribute("rowList"));
        List<String> rows = (List) request.getSession().getAttribute("tableRows");
        if (rows != null && !rows.isEmpty()) {
          for (String row : rows) {
            out.println(row);
          }
        }
        %>

      </table>

    </td>
  </tr>
  <tr style="height: 70px">
    <td colspan="2" style="background-color:#85C2FF;text-align:center; vertical-align: center" >
      © Sudarina 2020</td>
  </tr>
</table>

</body>
</html>