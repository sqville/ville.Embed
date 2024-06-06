/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Certificate",
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

   var pathdregular = "M4 3a2 2 0 0 0-2 2v3.67c.29-.35.62-.66 1-.91V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9.24l-.24.33V15h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm1 3.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 8.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-2.5.24a4.48 4.48 0 0 0 5 0V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0L3.8 18.4A.5.5 0 0 1 3 18v-2.76ZM10.5 10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   var pathdfilled = "M4 3a2 2 0 0 0-2 2v3.67a4.5 4.5 0 1 1 7 5.66V15h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm1.5 4a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9Zm5.5 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 15a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-2.5.24a4.48 4.48 0 0 0 5 0V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0L3.8 18.4A.5.5 0 0 1 3 18v-2.76Z";
   
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