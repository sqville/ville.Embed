/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Hdr",
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

   var pathdregular = "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 15 3 14.22 3 13.25v-6.5Zm1.5.75c.28 0 .5.22.5.5v1.5h2V8a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5ZM9 8c0-.28.22-.5.5-.5h.25c1.24 0 2.25 1 2.25 2.25v.5c0 1.24-1 2.25-2.25 2.25H9.5A.5.5 0 0 1 9 12V8Zm1 3.47c.57-.11 1-.62 1-1.22v-.5c0-.6-.43-1.1-1-1.22v2.95ZM13 8c0-.28.22-.5.5-.5h1a1.5 1.5 0 0 1 .87 2.72l.6 1.6a.5.5 0 0 1-.94.36l-.63-1.68H14V12a.5.5 0 0 1-1 0V8Zm1 1.5h.5a.5.5 0 0 0 0-1H14v1Z";
   var pathdfilled = "M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4H4.75ZM4.5 7.5c.28 0 .5.22.5.5v1.5h2V8a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-1.5H5V12a.5.5 0 0 1-1 0V8c0-.28.22-.5.5-.5ZM9 8c0-.28.22-.5.5-.5h.25c1.24 0 2.25 1 2.25 2.25v.5c0 1.24-1 2.25-2.25 2.25H9.5A.5.5 0 0 1 9 12V8Zm1 3.47c.57-.11 1-.62 1-1.22v-.5c0-.6-.43-1.1-1-1.22v2.95ZM13 8c0-.28.22-.5.5-.5h1a1.5 1.5 0 0 1 .87 2.72l.6 1.6a.5.5 0 0 1-.94.36l-.63-1.68H14V12a.5.5 0 0 1-1 0V8Zm1 1.5h.5a.5.5 0 0 0 0-1H14v1Z";
   
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