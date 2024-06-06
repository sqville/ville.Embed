/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudWords",
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

   var pathdregular = "M8.5 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 11.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.5-.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm3.15-2.75C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.44A3.33 3.33 0 0 0 18 11.62a3.33 3.33 0 0 0-3.28-3.37h-.07Zm-8.3.1C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07A2.33 2.33 0 0 1 17 11.62 2.33 2.33 0 0 1 14.72 14H5.28A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9Z";
   var pathdfilled = "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.44A3.33 3.33 0 0 0 18 11.62a3.33 3.33 0 0 0-3.28-3.37h-.07ZM8.5 7h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM4 11.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z";
   
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