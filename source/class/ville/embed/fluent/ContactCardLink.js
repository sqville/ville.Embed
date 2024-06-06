/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ContactCardLink",
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

   var pathdregular = "M7.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.55.75a.95.95 0 0 0-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8a.95.95 0 0 0-.95-.94h-3.1ZM12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.75 4C3.78 4 3 4.78 3 5.75v8.5c0 .97.78 1.75 1.75 1.75h5.59a3.47 3.47 0 0 1-.3-1H4.75a.75.75 0 0 1-.75-.75v-8.5c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v5.29c.35.05.69.15 1 .3V5.75C19 4.78 18.22 4 17.25 4H4.75Zm8.75 8a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H17a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H17Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   var pathdfilled = "M2 5.5C2 4.67 2.67 4 3.5 4h13c.83 0 1.5.67 1.5 1.5v5.84a3.49 3.49 0 0 0-1.5-.34h-4a3.5 3.5 0 0 0-3.16 5H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm3 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm4 3.2a.95.95 0 0 0-.95-.95h-3.1a.95.95 0 0 0-.95.95c0 .85.58 1.58 1.4 1.79l.06.01c.68.18 1.4.18 2.08 0l.06-.01c.82-.2 1.4-.94 1.4-1.8ZM11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm1 4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   
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