/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonAlertOff",
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

   var pathdregular = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.64 0 1.26-.05 1.86-.14a1.5 1.5 0 0 1-.79-.9c-.34.02-.7.04-1.07.04a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 3 13a1 1 0 0 1 1-1h6.88a1.5 1.5 0 0 1-.38-1H4Zm14.65 7.35L17.29 17H11.5a.5.5 0 0 1-.32-.88L12.5 15v-2a3 3 0 0 1 .08-.7l-.93-.95a.5.5 0 0 1 .7-.7l7 7a.5.5 0 0 1-.7.7Zm-.15-2.97-4.79-4.79A3 3 0 0 1 18.5 13v2.38Zm-3 3.62a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z";
   var pathdfilled = "M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 9 18c.64 0 1.26-.05 1.86-.14a1.5 1.5 0 0 1-.33-2.5l.97-.82V13c0-.12 0-.24.02-.36l-.58-.58A1.5 1.5 0 0 1 10.5 11H4Zm14.65 7.35L17.29 17H11.5a.5.5 0 0 1-.32-.88L12.5 15v-2a3 3 0 0 1 .08-.7l-.93-.95a.5.5 0 0 1 .7-.7l7 7a.5.5 0 0 1-.7.7Zm-.15-2.97-4.79-4.79A3 3 0 0 1 18.5 13v2.38Zm-3 3.62a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z";
   
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