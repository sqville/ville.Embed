/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Flashlight",
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

   var pathdregular = "M14.46 1.67a.5.5 0 1 0-1 0v.83a.5.5 0 0 0 1 0v-.83Zm3.4 1.18a.5.5 0 0 0-.71-.7l-1.5 1.5a.5.5 0 0 0 .7.7l1.5-1.5Zm-10 10a.5.5 0 1 0-.71-.7l-1 1a.5.5 0 1 0 .7.7l1-1ZM7 5v3.8l-4.3 4.29a2 2 0 0 0 0 2.82L4.1 17.3a2 2 0 0 0 2.82 0l4.3-4.3H15a.5.5 0 0 0 .35-.14l1.44-1.44a2 2 0 0 0 0-2.82L11.41 3.2a2 2 0 0 0-2.82 0L7.15 4.65A.5.5 0 0 0 7 5ZM9.3 3.9a1 1 0 0 1 1.4 0L16.1 9.3a1 1 0 0 1 0 1.42l-1.1 1.08L8.22 5l1.08-1.08ZM8 6.21 13.8 12h-2.6L8 8.8V6.2Zm-.5 3.5 2.8 2.79-4.1 4.09a1 1 0 0 1-1.4 0L3.4 15.2a1 1 0 0 1 0-1.42L7.5 9.71Zm10-4.17a.5.5 0 1 0 0 1h.83a.5.5 0 1 0 0-1h-.83Z";
   var pathdfilled = "M13.96 1.17c.27 0 .5.22.5.5v.83a.5.5 0 1 1-1 0v-.83c0-.28.22-.5.5-.5Zm3.9.98c.19.2.19.5 0 .7l-1.5 1.5a.5.5 0 1 1-.71-.7l1.5-1.5c.2-.2.5-.2.7 0ZM7 5.2v2.58l5.2 5.2h2.6L7 5.22Zm8.7 7.29 1.1-1.09a2 2 0 0 0 0-2.82L11.4 3.2a2 2 0 0 0-2.82 0L7.5 4.29l8.2 8.2Zm-4.7.7L6.8 9l-4.1 4.09a2 2 0 0 0 0 2.82L4.1 17.3a2 2 0 0 0 2.82 0L11 13.21Zm-3.15-.35-1 1a.5.5 0 0 1-.7-.7l1-1a.5.5 0 1 1 .7.7ZM17 6.05c0-.29.22-.5.5-.5h.83a.5.5 0 1 1 0 1h-.83a.5.5 0 0 1-.5-.5Z";
   
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