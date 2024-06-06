/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoPersonCall",
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

   var pathdregular = "M10 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v2.68A2.3 2.3 0 0 0 17 8V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.22a2.07 2.07 0 0 0-1 .08v-.3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V15h4.56c-.26.3-.43.64-.51 1H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm13.58 5.08.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z";
   var pathdfilled = "M12.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v2.68A2.3 2.3 0 0 0 17 8V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v.22c-.7-.12-1.4.13-1.88.65l-.55.61c-.27.3-.44.66-.52 1.02H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm13.58 5.08.29-.75a1.32 1.32 0 0 1 1.74-.73l.39.17c.47.2.86.57.94 1.06.46 2.73-1.9 6.6-4.63 7.59a1.6 1.6 0 0 1-1.44-.25l-.35-.23c-.6-.41-.7-1.24-.2-1.79l.54-.6c.26-.3.66-.42 1.04-.33l1.22.29c.97-.6 1.5-1.46 1.56-2.56l-.88-.86a.94.94 0 0 1-.22-1Z";
   
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