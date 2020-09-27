<%@ page import="java.util.ArrayList" %>
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
<%--<%
  String theme = (String) request.getSession().getAttribute("theme");
  if (theme == null) {
    request.getSession().setAttribute("theme", "light");
  }
%>--%>
<head>
  <meta charset="UTF-8">
  <title>
    LabWork_2
  </title>
  <link rel="icon" type="image/png" href="resources/angry.gif"><%--
  <link rel="stylesheet" type="text/css" href="Css/<% out.print(request.getSession().getAttribute("theme"));%>.css" id="theme-link">
  --%><link rel="stylesheet" type="text/css" href="Css/style.css">
  <link rel="stylesheet" type="text/css" href="Css/buttons.css">
  <script type="text/javascript" src="jquery-3.5.1.js"></script>
  <script type="text/javascript" src="script.js"></script>
</head>
<body>
<%--
<header class="title">
  <span>Вариант 2630</span>
  <span class="name-group">Супрядкина Дарья,<br>Ходосова Елена, P3230</span>
  <span><img class="head-img" src="resources/kind.gif" id="kind"
             onmouseover="this.src='resources/angry.gif'"
             onmouseout="this.src='resources/kind.gif'">
               <button class="theme-button" id="theme-button">Change theme</button>
    </span>
</header>
<table class="page">
  <tr><td style="width: 10%; text-align: left">
  <div id="canvas">
    <canvas id="graphic" width="400" height="400">Not Allowed</canvas></div></td>
    <td style="width: 40%;">
  <table class="formtab">
  <form>
    <tr>
      <th colspan="2">
      <div class="y-group">
        <label for= "inY">Y Value:</label>
        <input id="inY" type="number" oninput=setCustomValidity('') required>
      </div></th>
    </tr>
    <tr>
      <td>
      <div class="r-group">
        <label for="r-value">R Value:</label>
        <div class="r-vals" id="r-value">
          <div>
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
          </div>
        </div>
      </div>
      </td>
      <td class="pics">
            <div id = "answer" style="text-align: center"></div>
            <div id = "first_line" style="text-align: center"></div>
      </td>
    </tr>
      <tr><th colspan="2">
        <div class="x-group">
        <div>X Value:</div>
        <label>
          <select id = "inX">
            <option selected>-5</option>
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
      </div></th>
      </tr>
    <tr>
    <div class="buttons">
      <th colspan="2"> <button class="send_button" type="button" id="send" aria-label="center"> Отправить</button></th>
    </div>
    </tr>
  </form>
  </table>
    </td>
    <td>
    <table id = "main-table">
      <%
        List<String> rows = (List) request.getSession().getAttribute("tableRows");
        if (rows != null && !rows.isEmpty()) {
          for (String row : rows) {
            out.println(row);
          }
        }
      %>

    </table></td>
  </tr>
  </table>
  <footer class="footer">
    <p>
      <a class="git-href" href="https://github.com/SuDarina/Web_2">
        <img class="github" src="resources/icon.png">
      </a>

    </p>

  </footer>
--%>


<table class="verst">
  <tr class = "header">

    <td  class="left">
      <div>Супрядкина Дарья,<br>Ходосова Елена, P3230</div>
    </td>

    <td class="right">
      <div><img class="head-img" src="resources/kind.gif" id="kind"
                onmouseover="this.src='resources/angry.gif'"
                onmouseout="this.src='resources/kind.gif'">Вариант 2630</div>
    </td>
  </tr>

  <!--    фон-->
  <tr class="page">
    <!--        фон-->
    <!--        здесь можно прописать границу между частями страницы-->
    <td style="width: 55%;">
      <!--            Место для графика + кнопки-->

      <table style="width: 100%">
        <tr>
          <td style="width: 40%;">

            <!--                        ГРАФИК-->
            <canvas id="graphic" width="400" height="400">Not Allowed</canvas>

          </td>
          <td>

            <!--                        заполняемая форма-->
            <form>
              <table class="formtab">
                <tr style="height: 30%; width: 100%">
                  <td>
                    <label>
                      <!--                                        значение по y-->
                      <label for="inY" id="r-label">Y Value:</label>
                      <input type="number" id="inY" required>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td style="width: 25%">

                    <div>
                      <!--                                        значение по r-->
                      R Value:<br>
                      <input type = 'checkbox' class="r" value="v1" name="R">
                      <label>1</label>
                      <input type = 'checkbox' class="r" value="v15" name="R">
                      <label>1,5</label>

                      <input type = 'checkbox' class="r" value="v2" name="R">
                      <label>2</label>

                      <input type = 'checkbox' class="r" value="v25" name="R">
                      <label>2,5</label>

                      <input type = 'checkbox' class="r" value="v3" name="R">
                      <label>3</label>

                    </div>

                  </td>
                </tr>

                <!--                            значение по X-->

                <tr style="height: 10%">
                  <td>
                    <div>X Value:</div>
                    <label>
                      <select id = "inX">
                        <option selected>-5</option>
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
                    <button class="send_button" type="button" id="send" aria-label="center"> Отправить</button>
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
</table>
<div class = "footer">

  <p colspan="2"><a class="git-href" href="https://github.com/SuDarina/Web_2">
    <img class="github" src="resources/icon.png">
  </a></p>
</div>

</body>
</html>