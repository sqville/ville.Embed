/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TagLock",
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

   var pathdregular = "M14 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.43.58L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.03.49V16.4a1 1 0 0 1-1.32-.08l-4.95-4.95a1 1 0 0 1 0-1.41l6.68-6.67a1 1 0 0 1 .71-.29l4.9.03a1 1 0 0 1 .99 1v4.95a1 1 0 0 1-.29.7l-.14.15a3 3 0 0 1 .6.82l.25-.25A2 2 0 0 0 18 8.98V4.03a2 2 0 0 0-1.99-2L11.12 2Zm1.37 10v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z";
   var pathdfilled = "M18 4.03a2 2 0 0 0-1.98-2L11.12 2a2 2 0 0 0-1.42.59L3.02 9.25a2 2 0 0 0 0 2.83l4.95 4.95a2 2 0 0 0 2.03.49V14a2 2 0 0 1 1.5-1.94V12a3 3 0 0 1 5.68-1.35l.25-.25A2 2 0 0 0 18 8.98V4.03ZM14 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-1.5 5v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z";
   
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