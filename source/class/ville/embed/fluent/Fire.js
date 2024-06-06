/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fire",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M4 11.75c0-.54.06-1.07.19-1.59a5.81 5.81 0 0 1 .86-1.93.65.65 0 0 1 .18-.17.5.5 0 0 1 .48 0c.08.04.14.1.18.17l1.04 1.7c.05.08.1.14.19.18.08.04.16.06.26.07.18 0 .32-.07.42-.2a.76.76 0 0 0 .06-.82c-.21-.46-.39-.91-.52-1.36a4.92 4.92 0 0 1 .12-3.17c.22-.5.52-.92.92-1.27.39-.35.84-.64 1.36-.86A8.09 8.09 0 0 1 11.5 2c.12 0 .23.04.32.12.12.1.18.23.18.38 0 .78.13 1.53.4 2.23.26.71.63 1.38 1.1 2l.87 1.13c.29.38.56.78.8 1.19.25.4.44.84.6 1.28.15.44.22.91.23 1.42a6.5 6.5 0 0 1-.8 3.1 6.57 6.57 0 0 1-2.12 2.27 5.74 5.74 0 0 1-4.71.65 5.6 5.6 0 0 1-1.44-.64 6.5 6.5 0 0 1-2.13-2.27 6.2 6.2 0 0 1-.8-3.1Zm11-.05c0-.4-.08-.8-.23-1.2-.15-.38-.34-.77-.57-1.14a11.4 11.4 0 0 0-.75-1.06c-.27-.34-.52-.66-.75-.98a8.76 8.76 0 0 1-1.14-1.98 7.79 7.79 0 0 1-.54-2.23c-.42.1-.8.25-1.15.43-.35.18-.66.4-.92.67s-.46.58-.6.94c-.14.36-.21.77-.22 1.22 0 .42.06.82.17 1.2.1.38.25.76.44 1.13.07.13.12.27.15.4l.06.45c0 .22-.04.42-.11.62a1.54 1.54 0 0 1-2.76.28 17.2 17.2 0 0 1-.6-.96 5.45 5.45 0 0 0 1.95 6.77 4.84 4.84 0 0 0 7.2-2.55c.23-.64.36-1.31.37-2.01Z";
   var pathdfilled = "M4 11.75c0-.54.06-1.07.19-1.59a5.81 5.81 0 0 1 .86-1.93.65.65 0 0 1 .18-.17.5.5 0 0 1 .48 0c.08.04.14.1.18.17l1.04 1.7c.05.08.1.14.19.18.08.04.16.06.26.07.18 0 .32-.07.42-.2a.76.76 0 0 0 .06-.82c-.21-.46-.39-.91-.52-1.36a4.92 4.92 0 0 1 .12-3.17c.22-.5.52-.92.92-1.27.39-.35.84-.64 1.36-.86A8.09 8.09 0 0 1 11.5 2c.12 0 .23.04.32.12.12.1.18.23.18.38 0 .78.13 1.53.4 2.23.26.71.63 1.38 1.1 2l.87 1.13c.29.38.56.78.8 1.19.25.4.44.84.6 1.28.15.44.22.91.23 1.42a6.5 6.5 0 0 1-.8 3.1 6.57 6.57 0 0 1-2.12 2.27 5.74 5.74 0 0 1-4.71.65 5.6 5.6 0 0 1-1.44-.64 6.5 6.5 0 0 1-2.13-2.27 6.2 6.2 0 0 1-.8-3.1Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});