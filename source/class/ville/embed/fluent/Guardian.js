/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Guardian",
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

   var pathdregular = "M6.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 11.62A1.5 1.5 0 0 1 4 16.5v-3.05a1.5 1.5 0 0 1-2-1.42V10.5A2.5 2.5 0 0 1 4.5 8h4c.82 0 1.54.4 2 1h5a2.5 2.5 0 0 1 2.5 2.5v1a1.5 1.5 0 0 1-2 1.41v2.59a1.5 1.5 0 0 1-2.5 1.12A1.5 1.5 0 0 1 11 16.5v-4.46a1.5 1.5 0 0 1-2 1.4v3.06a1.5 1.5 0 0 1-2.5 1.12ZM3 10.5v1.53a.5.5 0 0 0 1 0V10.5a.5.5 0 0 1 1 0v6a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 0 1 0v-6a.5.5 0 0 1 1 0v1.53a.5.5 0 0 0 1 0V10.5C10 9.67 9.33 9 8.5 9h-4C3.67 9 3 9.67 3 10.5Zm7.95-.5c.03.16.05.33.05.5v.5h1v5.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v1a.5.5 0 0 0 1 0v-1c0-.83-.67-1.5-1.5-1.5h-4.55ZM16 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z";
   var pathdfilled = "M9 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.73 9A2 2 0 0 0 9 8H4a2 2 0 0 0-2 2v2.5a1 1 0 1 0 2 0v4.25a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 1 0 2.5 0V12.5a1 1 0 1 0 2 0V10a2 2 0 0 0-.27-1ZM14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3 6.23a2 2 0 0 0 1-1.73V10a3 3 0 0 0-.17-1H16a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0v3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 1 1-2.5 0v-2.52Z";
   
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