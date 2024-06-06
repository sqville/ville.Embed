/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableSimpleCheckmark",
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

   var pathdregular = "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h3.5v5.5H4V6Zm6.5 3.5V4H14a2 2 0 0 1 2 2v3.5h-5.5Zm-6.5 1h5.5V16H6a2 2 0 0 1-2-2v-3.5Zm10.86 1.4c.2.2.2.5 0 .7l-1.75 1.75a.5.5 0 0 1-.71 0l-.75-.75a.5.5 0 0 1 .7-.7l.4.4 1.4-1.4c.2-.2.51-.2.7 0Z";
   var pathdfilled = "M14 17h-3.5v-6.5H17V14a3 3 0 0 1-3 3Zm3-7.5h-6.5V3H14a3 3 0 0 1 3 3v3.5Zm-7.5 0V3H6a3 3 0 0 0-3 3v3.5h6.5Zm0 7.5v-6.5H3V14a3 3 0 0 0 3 3h3.5Zm5.85-3.9a.5.5 0 0 0-.7-.7l-1.4 1.4-.4-.4a.5.5 0 0 0-.7.7l.75.75c.2.2.5.2.7 0l1.75-1.75Z";
   
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